import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Senderos} from '../screens/Senderos';
import {Sectores} from '../screens/Sectores';
import {SectoresInfo} from '../screens/SectoresInfo';
const Stack = createStackNavigator();

export function SenderosStack() {
    return (
        <Stack.Navigator
            initialRouteName="SenderosScreen"
            screenOptions={{
                headerStyle: { backgroundColor: '#121212' }, // Color de fondo del header
                headerTintColor: '#00a680', // Color del texto del header
            }}
        >
            <Stack.Screen
                name="SenderosScreen"
                component={Senderos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Sectores"
                component={Sectores}
                options={{ title: 'Sectores' }}
            />
            <Stack.Screen
                name="SectoresInfo"
                component={SectoresInfo}
                options={{ title: 'Detalles' }}
            />
        </Stack.Navigator>
    );
}
