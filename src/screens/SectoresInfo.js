import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Audio } from 'expo-av';
export function SectoresInfo  ()  {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundObject = new Audio.Sound();
  const playAudio = async () => {
    try {
      await soundObject.loadAsync(require('../utils/audio.mp3'));
      if (isPlaying) {
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
        setIsPlaying(false);
        return;
      }
      else {
        await soundObject.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error al cargar el audio:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../utils/laguna.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Nombre</Text>
          <Text style={styles.infoValue}>Lugar 1</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Punto</Text>
          <Text style={styles.infoValue}>12</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Dato</Text>
          <Text style={styles.infoValue}>10</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descripción</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.startButton]}>
          <Icon name="hiking" type="font-awesome-5" color="white" size={20} />
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.listenButton]} onPress={() => playAudio()}>
          <Icon name="headphones" type="font-awesome-5" color="white" size={20} />
          <Text style={styles.buttonText}>Escuchar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  backgroundImage: {
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -25,
    marginHorizontal: 10,
  },
  infoBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '30%',
  },
  infoTitle: {
    color: 'grey',
    fontSize: 12,
  },
  infoValue: {
    color: '#00FF7F',
    fontSize: 16,
  },
  descriptionContainer: {
    padding: 20,
  },
  descriptionTitle: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  descriptionText: {
    color: 'grey',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    width: '40%',
  },
  startButton: {
    backgroundColor: '#32CD32',
  },
  listenButton: {
    backgroundColor: '#00CED1',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});