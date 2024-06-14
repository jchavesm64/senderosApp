import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";

export function FormularioNombre({navigation}) {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          ¿Cómo te llamas?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterPhone')} style={styles.buttonBack}>
          <Icon name="arrow-back" size={24} color="white" />
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.buttonNext}>
          <Text style={styles.buttonText}>Siguiente</Text>
          <Icon name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    paddingTop: 60,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "white",
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "transparent",
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#717171",
    width: '70%',
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
});
