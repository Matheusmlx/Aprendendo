import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Tradutor({navigation}) {
  function handleInicio() {
    AsyncStorage.getItem('idioma').then(lang => {
      navigation.navigate('Main', {lingua: lang});
    });
  }
  return (
    <View>
      <TouchableOpacity onPress={handleInicio}>
        <Text>Pagina Tradutor</Text>
      </TouchableOpacity>
    </View>
  );
}
