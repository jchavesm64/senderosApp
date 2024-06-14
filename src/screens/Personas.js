import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { Icon } from 'react-native-elements';

export function Personas({navigation}) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const numbers = [...Array(50).keys()].map(i => (i + 1).toString());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cantidad de Personas</Text>
      <Text style={styles.subtitle}>Lorem ipsum xd</Text>
      <View style={styles.pickerContainer}>
        <WheelPickerExpo
          backgroundColor='#1d1d1d'
          selectedStyle={styles.item}
          height={200}
          width={200}
          initialSelectedIndex={selectedNumber - 1}
          items={numbers.map(number => ({ label: number, value: number }))}
          onChange={({ item }) => setSelectedNumber(parseInt(item.label))}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBack}>
          <Icon name="arrow-back" size={24} color="white" />
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPhone')} style={styles.buttonNext}>
          <Text style={styles.buttonText}>Siguiente</Text>
          <Icon name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  title: {
    color: '#cacbcb',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  subtitle: {
    color: '#cacbcb',
    fontWeight: '400',
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    width: 200,
    height: 180,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#07aa6c',
    borderRadius: 30,
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    marginHorizontal: 5,
  },
  item: {
    borderColor: '#07aa6c',
    borderWidth: 3,
  },
});

export default Personas;
