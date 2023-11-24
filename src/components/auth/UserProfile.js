import { View, Text, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5"
import React from 'react'

// Context 
import { useData } from '../../hooks/useData.js'
export default function UserProfile() {
  const { userInfoDb } = useData(); 
  return (
    <SafeAreaView>
      <View style = {styes.FirstameContainerStyle}>
        <Text style = {styes.FirstNameTextStyle}>{userInfoDb.firstName} {userInfoDb.lastName}</Text>
      <View style = {styes.EmailContainerStyle}>
        <Text style = {styes.EmailTextStyle}>{userInfoDb.email}</Text>
      </View>
      </View>
      <View style = {styes.ContainerOptions}> 
        <View style = {styes.CardHistory}>
          <Icon name='history' size={30} color={'white'}/> 
          <Text style = {styes.CardHistoryTextTitle}>Historial de compras</Text>
          <Text style = {styes.CardHistoryTextSubTitle}>Da un vistazo a todas las compras anteriores</Text>
        </View>
        <View style = {styes.CardCreditCard}>
          <Icon name='credit-card' size={30} color={'black'}/>
          <Text style = {styes.CardCardTextTitle}>Añadir tarjeta</Text>
          <Text style = {styes.CardCardTextSubTitle}>Añade una nueva tarjeta para realizar todas tus compras</Text>
        </View>
        <View style = {styes.CardEditInfo}>
          <Icon name='edit' size={30} color={'white'}/>
          <Text style = {styes.CardEditTextTitle}>Editar Información</Text>
          <Text style = {styes.CardEditTextSubTitle}>Edita tu información de contacto queremos concerta más</Text>
        </View>
        <View style = {styes.CardFavorites}>
          <Icon name='heart' size={30} color={'white'}/>
          <Text style = {styes.CardFavoritesTextTitle}>Tus favoritos</Text>
          <Text style = {styes.CardFavoritesTextSubTitle}>Mira tu lista de productos favoritos</Text>
        </View>
      </View>
  
    </SafeAreaView>
  )
}

const styes = StyleSheet.create({
  FirstameContainerStyle:{
    display:'flex', 
    gap:6,
    width:'100%',
    height:'25%',
    backgroundColor:'black',
    justifyContent:'center',
  },
  FirstNameTextStyle:{
    marginLeft:20,
    fontSize:30,
    fontWeight:'900',
    color:'white',
  },
  EmailTextStyle:{
    width:'60%',
    padding:5,
    textAlign:'center', 
    color:'black',
    backgroundColor:'white',
    marginLeft:20,
    fontWeight:'400',
    borderRadius:15,
  },
  EmailContainerStyle:{
    marginTop:0, 
  },
  ContainerOptions:{
    margin:20,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    gap:10,
  }, 
  CardHistory:{
    display:'flex',
    gap:10,
    width:'45%',
    backgroundColor:'#374151', 
    padding:15,
    borderRadius:20,
  },
  CardHistoryTextTitle:{
    fontWeight:'900', 
    fontSize:20,
    color:'white',
  },
  CardHistoryTextSubTitle:{
    color:'white',
    fontWeight:'500', 
  },
  CardCreditCard:{
    display:'flex',
    gap:10,
    width:'45%',
    backgroundColor:'#E0D0C0', 
    padding:15,
    borderRadius:20,
  },
  CardCardTextTitle:{
    fontWeight:'900', 
    fontSize:20,
    color:'black',
  },
  CardCardTextSubTitle:{
    color:'black',
    fontWeight:'500', 
  },
  CardEditInfo:{
    display:'flex',
    gap:10,
    width:'45%',
    backgroundColor:'#053B50', 
    padding:15,
    borderRadius:20,
  },
  CardEditTextTitle:{
    fontWeight:'900', 
    fontSize:20,
    color:'white',
  },
  CardEditTextSubTitle:{
    color:'white',
    fontWeight:'500', 
  },
  CardFavorites:{
    display:'flex',
    gap:10,
    width:'45%',
    backgroundColor:'#ED80B8', 
    padding:15,
    borderRadius:20,
  },
  CardFavoritesTextTitle:{
    fontWeight:'900', 
    fontSize:20,
    color:'white',
  },
  CardFavoritesTextSubTitle:{
    color:'white',
    fontWeight:'500', 
  },
}); 