import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function TextScreen() {
    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput
                value={password}
                onChangeText={(newVal) => setPassword(newVal)}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
            />
            {password.length < 4 ? <Text>Must be longer than 4 char</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 12,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TextScreen;
