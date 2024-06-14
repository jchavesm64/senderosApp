import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Audio } from 'expo-av';

export function SectoresInfo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);

  useEffect(() => {
    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, [soundObject]);

  const playAudio = async () => {
    try {
      if (!soundObject) {
        const { sound } = await Audio.Sound.createAsync(require('../utils/audio.m4a'));
        setSoundObject(sound);
        await sound.playAsync();
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          await soundObject.pauseAsync();
          setIsPlaying(false);
        } else {
          await soundObject.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('Error al cargar el audio:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../utils/sedro.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Nombre</Text>
          <Text style={styles.infoValue}>Sedro</Text>
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
          El cedro amargo nombre científico cedrela odorata, familia botánica meliaceae, es un árbol nativo de Costa Rica conocido por su madera y conocidas flores. Se puede encontrar desde México hasta Suramérica y el Caribe, desde el nivel del mar hasta aproximadamente 1400 metros de elevación.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.startButton]}>
          <Icon name="hiking" type="font-awesome-5" color="white" size={20} />
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.listenButton]}
          onPress={playAudio}
        >
          <Icon
            name={isPlaying ? 'pause' : 'play'}
            type="font-awesome"
            color="white"
            size={20}
          />
          <Text style={styles.buttonText}>{isPlaying ? 'Pausar' : 'Reproducir'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  startButton: {
    backgroundColor: '#32CD32',
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
  listenButton: {
    backgroundColor: '#00CED1',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});
