import * as React from 'react';
import Personas from './Personas';
import RegisterNumberScreen from './RegisterNumberScreen';
import { FormularioNombre } from './FormularioNombre';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function FormularioStack() {
  return (
    <Stack.Navigator initialRouteName="NumeroPersonas">
      <Stack.Screen name="NumeroPersonas" component={Personas} options={{headerShown: false}} />
      <Stack.Screen name="RegisterPhone" component={RegisterNumberScreen} options={{ headerShown:false }} />
      <Stack.Screen name="RegisterName" component={FormularioNombre} options={{ headerShown:false }} />
    </Stack.Navigator>
  );
}
