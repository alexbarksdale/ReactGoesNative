import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Alex</Text>
            <Button
                onPress={() => navigation.navigate('Components')}
                title='Go to components'
            />
            <Button onPress={() => navigation.navigate('List')} title='Go to list' />
            <Button onPress={() => navigation.navigate('Image')} title='Go to images' />
            <Button
                onPress={() => navigation.navigate('Counter')}
                title='Go to counter'
            />
            <Button onPress={() => navigation.navigate('Colors')} title='Go to colors' />
            <Button onPress={() => navigation.navigate('Square')} title='Go to square' />
            <Button onPress={() => navigation.navigate('Text')} title='Go to text' />
            <Button onPress={() => navigation.navigate('Box')} title='Go to Box' />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
