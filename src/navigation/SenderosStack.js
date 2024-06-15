import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Senderos} from '../screens/Senderos';
import {Sectores} from '../screens/Sectores';
import {SectoresInfo} from '../screens/SectoresInfo';
const Stack = createStackNavigator();

export function SenderosStack() {
	return (
		<Stack.Navigator initialRouteName="SenderosScreen">
			<Stack.Screen name="SenderosScreen" component={Senderos} options={{headerShown: false}} />
			<Stack.Screen name="Sectores" component={Sectores} options={{title: 'Sectores'}} />
			<Stack.Screen name="SectoresInfo" component={SectoresInfo} options={{title: 'Detalles'}} />
		</Stack.Navigator>
	);
}
