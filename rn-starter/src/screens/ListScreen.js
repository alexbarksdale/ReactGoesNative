import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ListScreen() {
    const friends = [
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' },
        { name: 'Friend #10' }
    ];

    // renderItem() - applies to each ELEMENT which contain: item and index
    // element === { item: { name: 'Friend #1'}, index: 0}
    // item === {name: 'Friend #1'} ---- we want this
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={friends}
            keyExtractor={(friend) => friend.name}
            renderItem={({ item }) => <Text style={styles.textStyle}>{item.name}</Text>}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 50
    }
});

export default ListScreen;
