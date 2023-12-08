import { View, Text, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5"
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// Context 
import { useData } from '../../hooks/useData.js'
export default function UserProfile() {
  const { userInfoDb } = useData(); 
  const navigate = useNavigation(); 
  const goToHistory = () =>{
    navigate.navigate('History')
  }
  const goToEditInfo = () =>{
    navigate.navigate('EditInfo')
  }
  const goToFavorites = () =>{
    navigate.navigate('Favorites')
  }
  const goToCards = () =>{
    navigate.navigate('Cards')
  }
  return (
    <SafeAreaView>
      <View style = {styes.FirstameContainerStyle}>
        <Text style = {styes.FirstNameTextStyle}>{userInfoDb.firstName} {userInfoDb.lastName}</Text>
      <View style = {styes.EmailContainerStyle}>
        <Text style = {styes.EmailTextStyle}>{userInfoDb.email}</Text>
      </View>
      </View>
      <View style = {styes.ContainerOptions}> 
        <Pressable style = {styes.CardHistory} key={1} onPress={()=>{goToHistory()}}>
          <Icon name='history' size={30} color={'#333333'}/> 
          <Text style = {styes.CardHistoryTextTitle}>Historial de compras</Text>
          {/* <Text style = {styes.CardHistoryTextSubTitle}>Da un vistazo a todas las compras anteriores</Text> */}
        </Pressable>
        <Pressable style = {styes.CardCreditCard} onPress={()=>{goToCards()}}>
          <Icon name='credit-card' size={30} color={'#333333'}/>
          <Text style = {styes.CardCardTextTitle}>Añadir tarjeta</Text>
          {/* <Text style = {styes.CardCardTextSubTitle}>Añade una nueva tarjeta para realizar todas tus compras</Text> */}
        </Pressable>
        {/* <Pressable style = {styes.CardEditInfo} onPress={()=>{goToEditInfo()}}>
          <Icon name='edit' size={30} color={'#333333'}/>
          <Text style = {styes.CardEditTextTitle}>Editar Información</Text>
        </Pressable>
        <Pressable style = {styes.CardFavorites} onPress={()=>{goToFavorites()}}>
          <Icon name='heart' size={30} color={'#333333'}/>
          <Text style = {styes.CardFavoritesTextTitle}>Tus favoritos</Text>
        </Pressable> */}
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
    backgroundColor:'#cecece',
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
    borderRadius:10,
  },
  EmailContainerStyle:{
    marginTop:0, 
  },
  ContainerOptions:{
    // borderStyle:'solid',
    // borderWidth:1,
    padding:10,
    width:'100%',
    height:'70%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    gap:10,
  }, 
  CardHistory:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width:'100%',
    gap:10,
    backgroundColor:'#efefef', 
    padding:15,
    borderRadius:10,
  },
  CardHistoryTextTitle:{
    fontWeight:'400', 
    fontSize:20,
    color:'#333333',
  },
  CardHistoryTextSubTitle:{
    color:'white',
    fontWeight:'500', 
  },
  CardCreditCard:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width:'100%',
    gap:10,
    backgroundColor:'#ffeac6', 
    padding:15,
    borderRadius:10,
  },
  CardCardTextTitle:{
    fontWeight:'400', 
    fontSize:20,
    color:'#333333',
  },
  CardCardTextSubTitle:{
    color:'black',
    fontWeight:'500', 
  },
  CardEditInfo:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width:'100%',
    gap:10,
    backgroundColor:'#c4e7ff', 
    padding:15,
    borderRadius:10,
  },
  CardEditTextTitle:{
    fontWeight:'400', 
    fontSize:20,
    color:'#333333',
  },
  CardEditTextSubTitle:{
    color:'white',
    fontWeight:'500', 
  },
  CardFavorites:{
    display:'flex',
    gap:10,
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width:'100%',
    backgroundColor:'#ffcef2', 
    padding:15,
    borderRadius:10,
  },
  CardFavoritesTextTitle:{
    fontWeight:'400', 
    fontSize:20,
    color:'#333333',
  },
  CardFavoritesTextSubTitle:{
    color:'white',
    fontWeight:'500', 
  },
}); 