import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Rutas} from '../screens/Rutas';
import {Ajustes} from '../screens/Ajustes';
import {FormularioStack} from '../screens/FormularioStack';
import {SenderosStack} from './SenderosStack';

const Tab = createBottomTabNavigator();
export function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#2b2b2b' },
                tabBarActiveTintColor: '#00a680',
                tabBarInactiveTintColor: '#646464',
                tabBarIcon: ({ color, size }) => TabscreenOptions(route, color, size),
            })}
        >
            <Tab.Screen
                name="Personas"
                component={FormularioStack}
                options={{ title: 'Personas', headerShown: false }}
            />
            <Tab.Screen
                name="Senderos"
                component={SenderosStack}
                options={{
                    title: 'Senderos',
                    headerStyle: { backgroundColor: 'black' },  // color de fondo del header
                    headerTintColor: '#00a680',  // color del texto del header
                    headerShown: false,

                }}
            />
            <Tab.Screen
                name="Rutas"
                component={Rutas}
                options={{
                    title: 'Rutas',
                    headerStyle: { backgroundColor: '#2b2b2b' },
                    headerTintColor: '#00a680',
                    headerShown: false,

                }}
            />
            <Tab.Screen
                name="Ajustes"
                component={Ajustes}
                options={{
                    title: 'Ajustes',
                    headerStyle: { backgroundColor: '#2b2b2b' },
                    headerTintColor: '#00a680',
                    headerShown: false,

                }}
            />
        </Tab.Navigator>
    );
}


function TabscreenOptions(route, color, size) {
	let iconName;

	if (route.name === 'Senderos') {
		iconName = 'compass';
	}
	if (route.name === 'Rutas') {
		iconName = 'map';
	}
	if (route.name === 'Ajustes') {
		iconName = 'cogs';
	}
	if (route.name === 'Personas') {
		iconName = 'cogs';
	}

	return <Icon type="material-community" name={iconName} color={color} size={size} />;
}
