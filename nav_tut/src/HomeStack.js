import React, { useContext, useEffect, useState, useRef } from 'react';
import faker from 'faker';
import { Text, TouchableOpacity, FlatList, Button, NavigatorIOS } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { addProductRoutes } from './addProductRoutes';

const Stack = createStackNavigator();

function Feed({ navigation }) {
    return (
        <Center>
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
        </Center>
    );
}

export const HomeStack = () => {
    const { logout } = useContext(AuthContext);

    return (
        <Stack.Navigator initialRouteName='Feed'>
            {addProductRoutes(Stack)}
            <Stack.Screen
                name='Feed'
                component={Feed}
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    logout();
                                }}
                            >
                                <Text>LOGOUT</Text>
                            </TouchableOpacity>
                        );
                    },
                }}
            />
        </Stack.Navigator>
    );
};
