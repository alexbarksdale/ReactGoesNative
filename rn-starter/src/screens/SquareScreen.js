import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === { type: RED || GREEN || BLUE, payload: 15 || -15}
    switch (action.type) {
        case RED:
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case GREEN:
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case BLUE:
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

function SquareScreen() {
    const COLOR_INCREMENT = 15;

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: RED, payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: RED, payload: -1 * COLOR_INCREMENT })}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: BLUE, payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: BLUE, payload: -1 * COLOR_INCREMENT })}
                color='Blue'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: GREEN, payload: COLOR_INCREMENT })}
                onDecrease={() =>
                    dispatch({ type: GREEN, payload: -1 * COLOR_INCREMENT })
                }
                color='Green'
            />

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;
