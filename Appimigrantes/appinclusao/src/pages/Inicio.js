import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../assets/LogocomTexto.png';

export default function Inicial({navigation}) {
  function handleEntrada() {
    navigation.navigate('Entrada');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleEntrada}>
        <Image style={styles.logo} source={Logo} />
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
  logo: {
    height: 125,
    width: 300,
  },
});
