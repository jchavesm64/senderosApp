import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Flag } from 'react-native-country-picker-modal';
import { Button } from 'react-native-elements';

export function RegisterNumberScreen() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+506');
  const [selectedCountryName, setSelectedCountryName] = useState('Costa Rica');
  const [selectedFlag, setSelectedFlag] = useState('CR');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>¿Cuál es tu número de teléfono?</Text>

      <Text style={styles.label}>País: </Text>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <View style={styles.countryInputContainer}>
          <Flag countryCode={selectedFlag} flagSize={25}  />
          <Text style={styles.countryCode}>{selectedCountryName}</Text>
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
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <CountryPicker
                withFlag
                withFilter
                withCallingCode
                onSelect={(item) => {
                  setSelectedCountryCode(`+${item.callingCode[0]}`);
                  setSelectedFlag(item.cca2);
                  setSelectedCountryName(item.name);
                  setShowPicker(false);
                }}
                style={styles.countryPicker}
              />
            </ScrollView>
            <Button
              title="Cerrar"
              onPress={() => setShowPicker(false)}
              buttonStyle={styles.closeButton}
            />
          </View>
        </View>
      </Modal>

      <Text style={styles.label}>Número: </Text>
      <View style={styles.countryInputContainer}>
        <Text style={styles.countryCode}>{selectedCountryCode}</Text>
        <TextInput
          style={styles.input}
          placeholder="Número telefónico"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={[styles.button, { backgroundColor: '#343434' }]}
          title="<"
          // onPress={() => handlePrevious()}
        />
        <Button
          buttonStyle={[styles.button, { backgroundColor: '#07aa6c' }]}
          title="Next >"
          // onPress={() => handleNext()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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
  },
  countryCode: {
    color: '#1d1d1d',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  input: {
    width: 200,
    height: 50,
    flex: 1,
    borderWidth: 1,
    borderColor: '#cacbcb',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#cacbcb',
    color: '#424242',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    maxHeight: '50%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    backgroundColor: '#07aa6c',
    marginTop: 20,
  },
  countryPicker: {
    width: '100%',
  },
});

export default RegisterNumberScreen;
