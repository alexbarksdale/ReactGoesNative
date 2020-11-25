import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import styled, { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import TestTextComp from './src/Test';
import theme from './ui/theme';

const Title = styled.Text`
    font-size: 24px;
    padding: 20px;
    font-family: 'SofiaProBlack';
    background-color: ${(props) => props.theme.gray500};
`;

const Box = styled.View`
    height: 100px;
    width: 100px;
    border-radius: 12px;
    background-color: orange;
`;

const InputTest = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    background-color: green;
`;

const getFonts = () =>
    Font.loadAsync({
        SofiaProMedium: require('./assets/fonts/SofiaProMedium.ttf'),
        SofiaProBold: require('./assets/fonts/SofiaProBold.ttf'),
        SofiaProBlack: require('./assets/fonts/SofiaProBlack.ttf'),
    });

export default function App() {
    const [fontsLoaded, setFonts] = useState(false);

    if (fontsLoaded) {
        return (
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    <Title>Hello</Title>
                    <Box />
                    <TestTextComp />
                    <Text>Open up App.js to start working on your app!</Text>
                    <InputTest />
                </View>
            </ThemeProvider>
        );
    } else {
        return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'SofiaProBlack',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
