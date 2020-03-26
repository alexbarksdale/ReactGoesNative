import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
function ImageScreen() {
    return (
        <View>
            <ImageDetail title='Forest' imgSrc={require('../../assets/forest.jpg')} />
            <ImageDetail title='Beach' imgSrc={require('../../assets/beach.jpg')} />
            <ImageDetail title='Mountain' imgSrc={require('../../assets/mountain.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;
