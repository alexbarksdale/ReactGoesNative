import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const INCREASE = 'inc';
const DECREASE = 'dec';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, count: action.payload + 1 };
        case DECREASE:
            return { ...state, count: action.payload - 1 };
        default:
            return state;
    }
};

function CoutnerScreen() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button
                title='Increase'
                onPress={() => dispatch({ type: INCREASE, payload: state.count })}
            />
            <Text>Current count: {state.count}</Text>
            <Button
                title='Decrease'
                onPress={() => dispatch({ type: DECREASE, payload: state.count })}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default CoutnerScreen;
