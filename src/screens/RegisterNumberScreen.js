import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Flag } from 'react-native-country-picker-modal';
import { Icon } from "react-native-elements";

export function RegisterNumberScreen({navigation}) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    cca2: 'CR',
    name: 'Costa Rica',
    callingCode: ['506'],
  });

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowPicker(false);
  }

  const  saveData = () => {
    //guardar datos en la base
    navigation.navigate('RegisterName')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Cuál es tu número de teléfono?</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>País: </Text>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <View style={styles.countryInputContainer}>
            <Flag countryCode={selectedCountry.cca2} flagSize={25} />
            <Text style={styles.countryCode}>{selectedCountry.name}</Text>
          </View>
        </TouchableOpacity> 

        <Modal
          visible={showPicker}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowPicker(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View contentContainerStyle={styles.viewContentCountries}>
                <CountryPicker
                  {...{
                    withFlag: true,
                    withFilter: true,
                    withCallingCode: true,
                    withModal: false,
                    onSelect: handleCountrySelect,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => setShowPicker(false)}
                style={styles.closeButton}
              >
                <Text style={{ color: 'white' }}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text style={styles.label}>Número: </Text>
        <View style={styles.phoneInputContainer}>
          <Text style={styles.phoneCode}>+{selectedCountry.callingCode[0]}</Text>
          <TextInput
            style={styles.input}
            placeholder="Número telefónico"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('NumeroPersonas')} style={styles.buttonBack}>
          <Icon name="arrow-back" size={24} color="white" />
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveData()} style={styles.buttonNext}>
          <Text style={styles.buttonText}>Siguiente</Text>
          <Icon name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    color: "white",
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#cacbcb',
  },
  countryInputContainer: {
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cacbcb',
    borderRadius: 8,
    backgroundColor: '#cacbcb',
    padding: 10,
    marginBottom: 20,
  },
  countryCode: {
    color: '#1d1d1d',
    marginLeft: 10,
  },
  phoneInputContainer: {
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cacbcb',
    borderRadius: 8,
    backgroundColor: '#cacbcb',
    padding: 10,
  },
  phoneCode: {
    color: '#1d1d1d',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    borderWidth: 0,
    padding: 0,
    backgroundColor: '#cacbcb',
    color: '#424242',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonNext: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#07aa6c",
    borderRadius: 30
  },
  buttonBack: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    marginHorizontal: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    maxHeight: '70%',
    padding: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContentCountries: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    backgroundColor: '#07aa6c',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default RegisterNumberScreen;
