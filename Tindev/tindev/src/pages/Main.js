import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import api from '../services/api'
import logo from "../assets/logo.png";
import like from "../assets/like.png";
import dislike from '../assets/dislike.png'

export default function Main({ navigation }) {
  const id = navigation.getParam('user')
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: id
        }
      })
      setUsers(response.data)
    }
    loadUsers();
  }, [id])

  async function handleLike(id) {
    const [user, ...rest] = users;
    //o segundo parametro do post é o corpo
    await api.post(`/devs/${user._id}/likes`, null, {
      headers: {
        user: id
      }
    })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handDislike(id) {
    const [user, ...rest] = users;
    //o segundo parametro do post é o corpo
    await api.post(`/devs/${user._id}/likes`, null, {
      headers: {
        user: id
      }
    })

    setUsers(rest)
  }
  async function handleLogout() {
    await AsyncStorage.clear()
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>


      <View style={styles.cardsContainer}>
        {users.length === 0
          ? <Text style={styles.empty}>Acabou :(</Text> : (
            users.map((user, index) => (
              <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
                <View style={styles.footer}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
                </View>
              </View>
            ))
          )}
      </View>
      <View style={styles.buttonscontainer}>
        <TouchableOpacity style={styles.button} onPress={handDislike}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,


  },
  logo: {
    marginTop: 30
  },
  empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold'
  }
  ,
  card: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },
  //Toda imagem que vem de uma url nescessariamente precisa ter um configuração de height e widht
  avatar: {
    flex: 1,
    height: 300
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18
  },
  buttonscontainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2
  }
})
