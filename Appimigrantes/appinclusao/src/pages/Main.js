import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Logo from '../assets/LogocomTexto.png';
import Gps from '../assets/gps.png';
import Educacao from '../assets/educacao.png';
import Documentos from '../assets/documentos.png';
import Tradutor from '../assets/tradutor.png';
import Saude from '../assets/saude.png';
import AsyncStorage from '@react-native-community/async-storage';

export default function Main({navigation}) {
  let language = navigation.getParam('lingua');

  let idiomas = [
    {
      lang: 'P',
      gps: 'Mapa da Rede',
      translate: 'Tradutor',
      docs: 'Documentos',
      education: 'Educação',
      health: 'Saúde',
    },
    {
      lang: 'E',
      gps: 'Network Map',
      translate: 'Translate',
      docs: 'Documents',
      education: 'Education',
      health: 'Health',
    },
    {
      lang: 'S',
      gps: 'Mapa de red',
      translate: 'Traductor',
      docs: 'Documentación',
      education: 'Educacion',
      health: 'Salud',
    },
    {
      lang: 'F',
      gps: 'Carte du réseau',
      translate: 'Traducteur',
      docs: 'La documentation',
      education: 'Éducation',
      health: 'Santé',
    },
  ];
  var tradutor = idiomas.filter(idiomas => idiomas.lang === language);

  function handleInicio() {
    AsyncStorage.clear();
    navigation.navigate('Inicio');
  }
  function handleGps() {
    //alert(tradutor);
    navigation.navigate('Gps');
  }
  function handletradutor() {
    navigation.navigate('Tradutor');
  }
  function handleDocumentos() {
    navigation.navigate('Documentos');
  }
  function handleEducacao() {
    navigation.navigate('Educacao');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleInicio}>
        <Image style={styles.logo} source={Logo} />
      </TouchableOpacity>
      <View style={styles.itens1}>
        <TouchableOpacity onPress={handleDocumentos} style={styles.item}>
          <Image source={Documentos} style={styles.imagem} />
          <Text style={styles.textItem}>{tradutor[0].docs}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handletradutor} style={styles.item}>
          <Image source={Tradutor} style={styles.imagem} />
          <Text style={styles.textItem}>{tradutor[0].translate}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleGps} style={styles.item}>
        <Image source={Saude} style={styles.imagem} />
        <Text style={styles.textItem}>{tradutor[0].health}</Text>
      </TouchableOpacity>
      <View style={styles.itens2}>
        <TouchableOpacity onPress={handleGps} style={styles.item}>
          <Image source={Gps} style={styles.imagem} />
          <Text style={styles.textItem}>{tradutor[0].gps}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEducacao} style={styles.item}>
          <Image source={Educacao} style={styles.imagem} />
          <Text style={styles.textItem}>{tradutor[0].education}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1685BC',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itens1: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    maxHeight: 200,
  },
  itens2: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    maxHeight: 200,
    marginBottom: 40,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height: 40,
    width: 40,
  },
  logo: {
    height: 100,
    width: 200,
  },
  textItem: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
