import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../assets/LogocomTexto.png';

export default function Documentos({navigation}) {
  function handleInicio() {
    AsyncStorage.getItem('idioma').then(lang => {
      navigation.navigate('Main', {lingua: lang});
    });
  }
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxTop]}>
        <View style={styles.boxItensTopButton}>
          <TouchableOpacity onPress={handleInicio}>
            <Text style={styles.Voltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxItensTopTitle}>
          <TouchableOpacity>
            <Text style={styles.textTitle}>Documentos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.box, styles.boxCenter]}>
        <View style={styles.boxItens}>
          <TouchableOpacity>
            <Text style={styles.textItem}>CPF</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxItens}>
          <TouchableOpacity>
            <Text style={styles.textItem}>RG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxItens}>
          <TouchableOpacity>
            <Text style={styles.textItem}>CTPS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxItens}>
          <TouchableOpacity>
            <Text style={styles.textItem}>SUS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1685BC',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box: {
    height: 100,
    width: '100%',
    marginTop: 35,
    alignItems: 'center',
    //backgroundColor: '#666',
    //borderColor: '#999',
    //borderWidth: 5,
    margin: 10,
  },
  boxTop: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    //backgroundColor: '#666',
    //borderColor: '#999',
    //borderWidth: 5,
    margin: 10,
    //flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxCenter: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
    // backgroundColor: '#666',
    // borderColor: '#999',
    //borderWidth: 5,
    margin: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxItens: {
    marginTop: 30,
    height: 100,
    width: 150,
    backgroundColor: '#FFF',
    //borderColor: '#999',
    //borderWidth: 5,
    borderRadius: 5,
    margin: 10,
  },
  boxItensTopTitle: {
    alignItems: 'flex-start',
    marginTop: 30,
    width: '70%',
    //backgroundColor: '#FFF',
  },
  boxItensTopButton: {
    marginLeft: 5,
    alignItems: 'flex-start',
    //marginTop: 30,
    width: '19%',

    borderRadius: 5,
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
  },
  textTitle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Voltar: {
    marginLeft: 10,
    alignSelf: 'center',
    color: '#1685BC',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textItem: {
    marginTop: 30,
    alignSelf: 'center',
    color: '#1685BC',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
