import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Gps({navigation}) {
  function handleInicio() {
    AsyncStorage.getItem('idioma').then(lang => {
      navigation.navigate('Main', {lingua: lang});
    });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleInicio}>
        <Text>PÁGINA EM CONSTRUÇÃO</Text>
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
});
