import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useFonts } from 'expo-font';

export const InformationEmergency = ({ children }) => {
  const [fontsLoaded] = useFonts({
    MontserratLight: require('../../../assets/fonts/Montserrat-Light.ttf'),
    MontserratRegular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
    MontserratExtraBold: require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  const [countdown, setCountdown] = useState(5); // Contador inicial en segundos
  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }

    const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {

            clearInterval(interval); // Detiene el temporizador cuando el contador llega a cero
            return 0;
          }
        });
      }, 1000);


    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usted ha solicitado ayuda de emergencia a su ubicación.</Text>

                {countdown !== 0 ? (
            <>
                <Text style={styles.subtitle}>Se solicitará la ayuda en:</Text>
                <Text style={styles.time}>
                {countdown < 10 ? `0${countdown}` : countdown}
                </Text>
            </>
            ) : (
            <Text style={styles.time2}>Se ha solicitado ayuda, mantenga la calma.</Text>
            )}

                    <Text style={styles.subtitle}>Sus Coordenadas:</Text>
                    <Text style={styles.coordinates}>lat: 234567890 | long: 234567890'</Text>
                    </View>
                );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    paddingVertical: 60,
    alignItems: 'center',
  },
  title: {
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'MontserratRegular',
  },
  subtitle: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'MontserratSemiBold',
  },
  time: {
    fontSize: 50,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'MontserratBold',
    color: '#F56D6C',
  },
  time2: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'MontserratRegular',
  },
  coordinates: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'MontserratRegular',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default InformationEmergency;
