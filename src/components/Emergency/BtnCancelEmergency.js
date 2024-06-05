import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const BtnCancelEmergency = ({ onPress, txt }) => {
  return (
    <View>
      <Button
        title="Cancelar"
        onPress={onPress}
        buttonStyle={styles.button}
        titleStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 20,
    marginHorizontal: 50,
  },
  text: {
    color: 'white',
  },
});

export default BtnCancelEmergency;
