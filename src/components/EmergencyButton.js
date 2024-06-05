import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Emergency } from '../screens/Emergency';
import { createContext } from 'react';
import { useContext } from 'react';
import { EmergencyContext } from '../context/EmergencyContext'; // Asegúrate de importar el contexto de emergencia




export function EmergencyButton() {
  const { setEmergencyState } = useContext(EmergencyContext); // Obtén la función para cambiar el estado de emergencia

  const onPressLearnMore = () => {
    // Define what happens when the button is pressed
    setEmergencyState(true); // Cambia el estado de emergencia a true
    // Puedes realizar otras acciones aquí si lo deseas
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressLearnMore}>
        <Text style={styles.buttonText}>S.O.S</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 70, // Distance from the bottom
    right: 20,  // Distance from the right
    // Optional: Add shadow for better visibility
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    backgroundColor: '#f73a39',
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 25,
    // Optional: Add shadow for better visibility
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

