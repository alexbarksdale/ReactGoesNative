import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';
import { Center } from './Center';

function Product({ route, navigation }) {
    return (
        <Center>
            <Text>{route.params.name}</Text>
            <Button
                title='Edit'
                onPress={() =>
                    navigation.navigate('EditProduct', {
                        name: route.params.name,
                    })
                }
            />
        </Center>
    );
}

function EditProduct({ route, navigation }) {
    const [formState, setFormState] = useState();
    const submit = useRef();

    submit.current = () => {
        // api call with new form state
        console.log('Edit product done');
        navigation.goBack();
    };

    useEffect(() => {
        navigation.setParams({ submit });
    }, []);

    return (
        <Center>
            <Text>Editing {route.params.name}...</Text>
        </Center>
    );
}

export const addProductRoutes = (Stack) => {
    return (
        <>
            <Stack.Screen
                name='Product'
                component={Product}
                options={({ route }) => ({
                    headerTitle: `Product: ${route.params.name}`,
                })}
            />
            <Stack.Screen
                name='EditProduct'
                component={EditProduct}
                options={({ route }) => ({
                    headerTitle: `Edit: ${route.params.name}`,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                //submit form
                                route.params.submit?.current();
                            }}
                        >
                            <Text>Done</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
        </>
    );
};
