// Ajustes.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useTranslation } from 'react-i18next'; // Importa useTranslation desde react-i18next
import { Icon } from 'react-native-elements';

export function Ajustes() {
  const { t } = useTranslation(); // Permite usar la función t() para traducir textos
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const [isLanguageListVisible, setIsLanguageListVisible] = useState(false);

  const toggleLanguageList = () => {
    setIsLanguageListVisible(!isLanguageListVisible);
  };

  const changeLanguage = (language) => {
    setIsLanguageListVisible(false); // Oculta la lista después de seleccionar un idioma
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Icon name="user" type="feather" size={40} color="white" />
        <Text style={styles.username}>Usuario345678</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>{t('editProfile')}</Text>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>{t('editProfile')}</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option} onPress={toggleLanguageList}>
        <Text style={styles.optionText}>{t('language')}</Text>
        <Icon name={isLanguageListVisible ? "chevron-up" : "chevron-down"} type="feather" color="white" />
      </TouchableOpacity>
      
      {isLanguageListVisible && (
        <View style={styles.languageList}>
          <TouchableOpacity style={styles.languageOption} onPress={() => changeLanguage('es')}>
            <Icon name="flag" type="font-awesome" size={24} color="#ec1c24" />
            <Text style={styles.languageText}>Español</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageOption} onPress={() => changeLanguage('en')}>
            <Icon name="flag" type="font-awesome" size={24} color="#0050a0" />
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.option}>
        <Text style={styles.optionText}>{t('sounds')}</Text>
        <Switch
          value={isSoundEnabled}
          onValueChange={value => setIsSoundEnabled(value)}
          trackColor={{ false: "#767577", true: "#32CD32" }}
          thumbColor={isSoundEnabled ? "#ffffff" : "#f4f3f4"}
        />
      </View>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>{t('darkMode')}</Text>
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
        <Text style={styles.optionText}>{t('aboutApp')}</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>{t('termsOfUse')}</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>{t('privacyPolicy')}</Text>
        <Icon name="chevron-right" type="feather" color="white" />
      </TouchableOpacity>
    </View>
  );
}

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
  languageList: {
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  languageText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Ajustes;
