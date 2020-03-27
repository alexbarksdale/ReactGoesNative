import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.bgStyle}>
            <MaterialIcons name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search...'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bgStyle: {
        flexDirection: 'row',
        backgroundColor: '#cdcdcd',
        height: 40,
        borderRadius: 6,
        marginTop: 18,
        marginHorizontal: 15,
        marginBottom: 12,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 8,
    },
});

export default SearchBar;
