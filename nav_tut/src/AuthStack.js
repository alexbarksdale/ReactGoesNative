import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './AuthProvider';
import { Center } from './Center';

const Stack = createStackNavigator();

function Login({ navigation }) {
    const { login } = useContext(AuthContext);
    return (
        <Center>
            <Text>Login screen</Text>
            <Button
                title='Log me in'
                onPress={() => {
                    navigation.navigate('Register');
                    login();
                }}
            />
            <Button
                title='Go to register'
                onPress={() => {
                    navigation.navigate('Register');
                }}
            />
        </Center>
    );
}

function Register({ navigation }) {
    return (
        <Center>
            <Text>Register screen</Text>
            <Button
                title='Go to login'
                onPress={() => {
                    navigation.navigate('Login');
                    // navigation.goBack();
                }}
            />
        </Center>
    );
}
export const AuthStack = () => {
    const {} = useContext(AuthContext);

    return (
        <Stack.Navigator
            initialRouteName='Login'
            // screenOptions={{
            //     header: () => null,
            // }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Register'
                component={Register}
                options={{
                    header: () => null,
                }}
            />
        </Stack.Navigator>
    );
};
