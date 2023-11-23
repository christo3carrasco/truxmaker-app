import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useData } from '../hooks/useData';

export default function HomeScreen() {
  const { userInfoDb } = useData(); 
  return (
    <SafeAreaView style= {styles.ContainerHome}>
      <Text style = {styles.User}>Hola! {userInfoDb != null ? userInfoDb.firstName: "Default"}</Text>
      <Text style = {styles.Title}>Bienvenido a TruxStore !</Text>
      <Text style = {styles.Phrase}>Tenemos todos los productos que necesitas en un solo lugar</Text>
      <Pressable style = {styles.Button}>
        <Text style = {styles.ButtonText}>
          Ir a la tienda
        </Text>
        <Icon name = {'store'} color={'white'}/>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ContainerHome:{
    position:'relative', 
    display:'flex', 
    justifyContent:'center', 
    padding:15,
    gap:10, 
    height:'100%', 
    backgroundColor:'white'
    // backgroundColor:'#264653', 
  }, 
  Title:{
    fontSize:40,
    color:'#e9c46b', 
    fontWeight:'900', 
  }, 
  Phrase:{
    color:'#264653',
    fontSize:20,  
  }, 
  Button:{
    backgroundColor:'#264653',
    display:'flex',
    gap:15, 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',  
    width:'40%',
    padding:8,
    borderRadius:5, 
  }, 
  ButtonText:{
    color:'white',
    fontWeight:'bold', 
  }, 
  Img:{
    position: 'relative', 
    bottom: 2, 
    right: 2, 
    width: 250, 
    height: 250, 
    borderRadius:10,
  }, 
  User:{
    position:'absolute', 
    top:40,
    right:2,
    marginRight:15,
  }, 
}); 