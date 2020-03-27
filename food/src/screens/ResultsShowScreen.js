import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

function ResultsShowScreen({ navigation }) {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.img} source={{ uri: item }} />;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 300,
    },
});

export default ResultsShowScreen;
