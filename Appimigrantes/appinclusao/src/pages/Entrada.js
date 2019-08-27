import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Picker,
} from 'react-native';
import Logo from '../assets/Logo.png';

export default function Inicial({navigation}) {
  const [language, setLanguage] = useState('');
  const [butoonText, setbutoonText] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('idioma').then(idioma => {
      if (idioma) {
        navigation.navigate('Main', {lingua: idioma});
      }
    });
  });

  function Tradutor(ling) {
    setLanguage(ling);
    var idioma = idiomas.find(lang => lang.lang == ling);
    setbutoonText(idioma.register);
  }

  const idiomas = [
    {
      lang: 'P',
      register: 'REGISTRAR',
    },
    {
      lang: 'E',
      register: 'REGISTER',
    },
    {
      lang: 'S',
      register: 'REGISTRARSE',
    },
    {
      lang: 'F',
      register: 'SINSCRIRE',
    },
  ];

  async function handleMain() {
    await AsyncStorage.setItem('idioma', language);
    navigation.navigate('Main', {lingua: language});
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.inputContainer}>
        <View style={styles.itens}>
          <Text style={styles.textEmail}>LANGUAGE:</Text>
          <Picker
            style={styles.picker}
            selectedValue={language}
            onValueChange={itemValue => Tradutor(itemValue)}>
            <Picker.Item
              color={styles.pickerText}
              label="Portugûes"
              value="P"
            />
            <Picker.Item label="Spanish" value="S" />
            <Picker.Item label="English" value="E" />
            <Picker.Item label="Francês" value="F" />
          </Picker>
        </View>

        <View style={styles.itens}>
          <Text style={styles.textEmail}>MAIL:</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="MAIL"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleMain} style={styles.button}>
        <Text style={styles.buttonText}>{butoonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1685BC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
  },
  itens: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-around',
  },
  logo: {
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textEmail: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: 200,
    height: 30,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    //marginTop: 15,
    paddingTop: 5,
  },
  buttonText: {
    backgroundColor: '#fff',
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 4,
    padding: 10,
  },
  picker: {
    height: 28,
    width: 200,

    //transform: [{scaleX: 2.0}, {scaleY: 2.0}],
  },
  pickerText: {
    color: '#FFF',
  },
});
