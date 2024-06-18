import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Icon } from 'react-native-elements';

export function Ajustes  () {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Icon name="user" type="feather" size={40} color="white" />
        <Text style={styles.username}>Usuario345678</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Configuración</Text>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Edit profile</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Idioma</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>

      <View style={styles.option}>
        <Text style={styles.optionText}>Sonidos</Text>
        <Switch
          value={isSoundEnabled}
          onValueChange={value => setIsSoundEnabled(value)}
          trackColor={{ false: "#767577", true: "#32CD32" }}
          thumbColor={isSoundEnabled ? "#ffffff" : "#f4f3f4"}
        />
      </View>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={value => setIsDarkModeEnabled(value)}
          trackColor={{ false: "#767577", true: "#32CD32" }}
          thumbColor={isDarkModeEnabled ? "#ffffff" : "#f4f3f4"}
        />
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Más</Text>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Sobre el app</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Políticas de uso</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Términos y condiciones</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
});
