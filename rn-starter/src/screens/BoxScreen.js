import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
{
    /* <View style={styles.viewStyle1}> */
}
{
    /*     <Text style={styles.textOneStyle}>C1</Text> */
}
{
    /*     <Text style={styles.textTwoStyle}>C2</Text> */
}
{
    /*     <Text style={styles.textThreeStyle}>C3</Text> */
}
{
    /* </View> */
}

function BoxScreen() {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOne} />
            <View style={styles.viewTwo} />
            <View style={styles.viewThree} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 3,
        height: 200,
        borderColor: 'black',
    },
    viewOne: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwo: {
        height: 50,
        width: 50,
        alignSelf: 'flex-end',
        backgroundColor: 'green',
    },
    viewThree: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
    },
    // viewStyle1: {
    //     // alignItems: 'stretch', // DEFAULT
    //     // flexDirection: 'column', // DEFAULT
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     height: 200,
    //     borderWidth: 3,
    //     borderColor: 'black',
    // },
    // textOneStyle: {
    //     flex: 1,
    //     borderWidth: 3,
    //     borderColor: 'red',
    // },
    // textTwoStyle: {
    //     flex: 2,
    //     alignSelf: 'flex-end',
    //     position: 'absolute',
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     ...StyleSheet.absoluteFillObject, // top: 0, right: 0, bottom: 0, left: 0
    // },
    // textThreeStyle: {
    //     flex: 1,
    //     borderWidth: 3,
    //     borderColor: 'red',
    // },
});
export default BoxScreen;
