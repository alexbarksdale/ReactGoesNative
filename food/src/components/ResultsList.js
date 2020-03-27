import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';

function ResultsList({ title, results, navigation }) {
    if (!results.length) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ResultsShow', {
                                    id: item.id, // Passes information to ResultsShowScreen
                                })
                            }
                        >
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 15,
    },
});

export default withNavigation(ResultsList);
