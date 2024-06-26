import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import {Rutas} from '../screens/Rutas';
import {Ajustes} from '../screens/Ajustes';
import {FormularioStack} from '../screens/FormularioStack';
import {SenderosStack} from './SenderosStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabscreenOptions(route, color, size) {
	let iconName;

	if (route.name === 'Senderos') {
		iconName = 'compass';
	} else if (route.name === 'Rutas') {
		iconName = 'map';
	} else if (route.name === 'Ajustes') {
		iconName = 'cogs';
	} else if (route.name === 'Personas') {
		iconName = 'account';
	}

	return <Icon type="material-community" name={iconName} color={color} size={size} />;
}

function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarStyle: {backgroundColor: '#2b2b2b'},
				tabBarActiveTintColor: '#00a680',
				tabBarInactiveTintColor: '#646464',
				tabBarIcon: ({color, size}) => TabscreenOptions(route, color, size),
			})}
		>
			<Tab.Screen name="Senderos" component={SenderosStack} options={{title: 'Senderos'}} />
			<Tab.Screen name="Rutas" component={Rutas} options={{title: 'Rutas'}} />
			<Tab.Screen name="Ajustes" component={Ajustes} options={{title: 'Ajustes'}} />
		</Tab.Navigator>
	);
}

export function AppNavigation() {
	return (
		<Stack.Navigator initialRouteName="Personas">
			<Stack.Screen name="Personas" component={FormularioStack} options={{headerShown: false}} />
			<Stack.Screen name="MainTabs" component={TabNavigator} options={{headerShown: false}} />
		</Stack.Navigator>
	);
}
