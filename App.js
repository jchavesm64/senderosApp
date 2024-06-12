// App.js

import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native"; 
import { AppNavigation } from "./src/navigation/AppNavigation"; 
import { EmergencyButton } from "./src/components/EmergencyButton"; 
import { EmergencyProvider, EmergencyContext } from './src/context/EmergencyContext';
import Emergency from './src/screens/Emergency';
import { Text } from 'react-native';
Text.defaultProps = {
  style: {
    fontFamily: 'sans-serif',
  },
};
export default function App() { 
  return ( 
    <EmergencyProvider>
      <NavigationContainer> 
        <MainContent />
      </NavigationContainer> 
    </EmergencyProvider>
  ); 
}

const MainContent = () => {
  const { emergencyState } = useContext(EmergencyContext);
  

  return (
    <>
      {emergencyState ? (
        <Emergency />
      ) : (
        <>
          <AppNavigation /> 
          <EmergencyButton />
        </>
      )}
    </>
  );
};
