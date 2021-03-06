import React, { useState } from 'react';
import { Text, Button, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import faker from 'faker';

import { Center } from './Center';
import { addProductRoutes } from './addProductRoutes';

const Stack = createStackNavigator();

function Search({ navigation }) {
    const [show, setShow] = useState(false);

    return (
        <Center>
            <Button
                title='Search Products'
                onPress={() => {
                    setShow(true);
                }}
            />
            {show ? (
                <FlatList
                    style={{ width: '100%' }}
                    renderItem={({ item }) => {
                        return (
                            <Button
                                title={item}
                                onPress={() => {
                                    navigation.navigate('Product', {
                                        name: item,
                                    });
                                }}
                            />
                        );
                    }}
                    keyExtractor={(product, idx) => product + idx}
                    data={Array.from(Array(50), () => faker.commerce.product())}
                />
            ) : null}
        </Center>
    );
}

export const SearchStack = () => {
    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen name='Search' component={Search} />
            {addProductRoutes(Stack)}
        </Stack.Navigator>
    );
};
