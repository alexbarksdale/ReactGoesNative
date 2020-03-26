import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function ImageDetail({ title, imgSrc }) {
    return (
        <View>
            <Image source={imgSrc} />
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;
