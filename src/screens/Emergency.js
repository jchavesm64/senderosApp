import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { IconEmergencyContainer } from '../components/Emergency/IconEmergencyContainer';
import { EmergencyContext } from '../context/EmergencyContext'; // Asegúrate de importar el contexto de emergencia
import BtnCancelEmergency from '../components/Emergency/BtnCancelEmergency';
import InformationEmergency from '../components/Emergency/InformationEmergency';

export const Emergency = ({ children }) => {
  const { setEmergencyState } = useContext(EmergencyContext); // Obtén la función para cambiar el estado de emergencia

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
      <IconEmergencyContainer />
      </View>
      <View style={styles.centerSection}>
        <InformationEmergency/>
      </View>
      <View style={styles.lowerSection}>
      <BtnCancelEmergency onPress={() => setEmergencyState(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f73a39',

  },
  upperSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  centerSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});

export default Emergency;
