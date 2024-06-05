import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell'
import {useFonts} from 'expo-font';


export const IconEmergencyContainer = ({ children }) => {
  const [fontsLoaded] = useFonts({
        
    MontserratLight: require('../../../assets/fonts/Montserrat-Light.ttf'),
    MontserratRegular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
    MontserratExtraBold: require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),

  });
  return (
    <View >
      <FontAwesomeIcon icon={faBell} size={65} color={'#fff'}  />
      <Text style={styles.text}>S.O.S</Text>
    </View>
  );
};


export default IconEmergencyContainer;


const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    paddingTop: 20,
    fontSize: 30,
    fontFamily: 'MontserratLight',
  },
});