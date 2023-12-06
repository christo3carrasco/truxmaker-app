import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { getAllCardsToUserApi } from '../../../services/Firebase/FirestoreFuncions'
import { useData } from '../../hooks/useData'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useEffect, useState } from 'react'

export default function CardsScreen() {
  const { userInfoDb } = useData(); 
  const navigation = useNavigation(); 
  const [ cardsList, setCadsList ] = useState([]); 
  const goToCardForm = () => {
    navigation.navigate('CardForm')
  }
  useEffect(()=>{
    (async()=>{
      const userCards = await getAllCardsToUserApi(userInfoDb.id); 
      setCadsList(userCards); 
    })()
  },[])
  useEffect(()=>{
    setCadsList([])
  },[userInfoDb])
  useEffect(()=>{
    console.log(cardsList);
  },[cardsList])
  return (
    <SafeAreaView>
      <Text style = {styes.CardsTitle}>Mis tarjetas</Text>
      <ScrollView>
        <View style = {styes.ContainerButton}>
          <View style = {styes.Button}>
            <View></View>
            <View></View>
          </View>
        </View>
      </ScrollView>
      <View style = {styes.ContainerButton}>
        <Pressable style = {styes.Button} onPress={()=>{goToCardForm()}}>
            <Icon name='credit-card'/>
            <Text style = {styes.ButtonText}>
              Agregar Tarjeta
            </Text>
          </Pressable>
      </View>
      <View style={styes.ContainerInfo}>
            <View style={styes.Info}>
                <Icon name='shield'/>
                <Text>Tu información está segura con nosotros</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styes = StyleSheet.create({
  CardsTitle:{
    marginTop:45,
    width:'100%',
    fontWeight:'300',
    fontSize:25,
    paddingLeft:20,
  },
  ContainerButton:{
    marginTop:10,
    marginBottom:10,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  Button:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    width:'90%',
    backgroundColor:'white',
    padding:40,
    borderRadius:10,
  },
  ButtonText:{
    fontWeight:'bold',
  },
  ContainerInfo:{
    marginTop:10,
    marginBottom:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  Info:{
    borderRadius:10,
    width:'90%',
    padding:10,
    backgroundColor:'#d7e5ed',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }
})