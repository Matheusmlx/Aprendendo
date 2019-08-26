import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Logo from '../assets/LogocomTexto.png';
import Gps from '../assets/gps.png';
import Educacao from '../assets/educacao.png';
import Documentos from '../assets/documentos.png';
import Tradutor from '../assets/tradutor.png';

export default function Main({navigation}) {
  const language = navigation.getParam('lingua');

  tradutor = language => {};

  let idiomas = [
    {
      lang: 'P',
      gps: 'Mapa da Rede',
      translate: 'Tradutor',
      docs: 'Documentos',
      education: 'Educação',
    },
    {
      lang: 'E',
      gps: 'Network Map',
      translate: 'Translate',
      docs: 'Documents',
      education: 'Education',
    },
    {
      lang: 'S',
      gps: 'Mapa de red',
      translate: 'Traductor',
      docs: 'Documentación',
      education: 'Educacion',
    },
    {
      lang: 'F',
      gps: 'Carte du réseau',
      translate: 'Traducteur',
      docs: 'La documentation',
      education: 'Éducation',
    },
  ];

  function handleInicio() {
    navigation.navigate('Inicio');
  }
  function handleGps() {
    alert(language);
    //navigation.navigate('Gps');
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
        <TouchableOpacity onPress={handleGps} style={styles.item}>
          <Image source={Gps} style={styles.imagem} />
          <Text style={styles.textItem}>
            {language == 'P' ? idiomas[0].gps : idiomas[1].gps}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handletradutor} style={styles.item}>
          <Image source={Tradutor} style={styles.imagem} />
          <Text style={styles.textItem}>
            {language == 'P' ? idiomas[0].translate : idiomas[1].translate}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itens2}>
        <TouchableOpacity onPress={handleDocumentos} style={styles.item}>
          <Image source={Documentos} style={styles.imagem} />
          <Text style={styles.textItem}>
            {language == 'P' ? idiomas[0].translate : idiomas[1].translate}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEducacao} style={styles.item}>
          <Image source={Educacao} style={styles.imagem} />
          <Text style={styles.textItem}>
            {language == 'P' ? idiomas[0].education : idiomas[1].education}
          </Text>
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
