import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

export const Routes = () => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check if user is logged in
        AsyncStorage.getItem('user')
            .then((userString) => {
                if (userString) {
                    //decode it
                    login();
                }
                setLoading(false);
                console.log(userString);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size='large' />
            </Center>
        );
    }
    return (
        <NavigationContainer>{user ? <AppTabs /> : <AuthStack />}</NavigationContainer>
    );
};
