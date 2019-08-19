import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Educacao({navigation}) {
  function handleInicio() {
    navigation.navigate('Main');
  }
  return (
    <View>
      <TouchableOpacity onPress={handleInicio}>
        <Text>Pagina Educacao</Text>
      </TouchableOpacity>
    </View>
  );
}
