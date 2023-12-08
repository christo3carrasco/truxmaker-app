import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { getAllCardsToUserApi, updateCardsUserApi } from '../../../services/Firebase/FirestoreFuncions'
import { useData } from '../../hooks/useData'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useEffect, useState } from 'react'


export default function CardsScreen() {
  const { userInfoDb, isLoading, setIsLoading } = useData(); 
  const navigation = useNavigation(); 
  const [ cardsList, setCardsList ] = useState([]); 

  //Listeners  
  const [isVisible, setIsVisible] = useState(false); 

  const goToCardForm = () => {
    navigation.navigate('CardForm')
  }

  // DeleteCard 
  const deleteCard = async(key) => {
    cardsList.splice(key, 1)
    setCardsList(cardsList)
    await updateCardsUserApi(userInfoDb.id, cardsList, "delete") 
    setIsLoading(true)
  }

  //Carga al regreso de CardForm
  useEffect(()=>{
    (async()=>{
      if (isLoading) {
        const userCards = await getAllCardsToUserApi(userInfoDb.id); 
        setCardsList(userCards); 
        setIsLoading(false)
      }
    })()
  },[isLoading])

    //Carga al montar el componente
    useEffect(()=>{
      (async()=>{
          const userCards = await getAllCardsToUserApi(userInfoDb.id); 
          setCardsList(userCards); 
      })()
    },[])
  

  useEffect(()=>{
    if (userInfoDb === undefined) {
      setCardsList([])
    }
  },[userInfoDb])

  
  return (
    <SafeAreaView>
      <Text style = {styes.CardsTitle}>Mis tarjetas</Text>
      <ScrollView>
        {
          cardsList != undefined?(<>
            {
              cardsList.map((card, key)=>{
                return(
                  <View key={key} style = {styes.ContainerButton}>
                    <View style = {styes.Button}>
                      <View style={styes.containerTextButton}>
                        <View> 
                          <Text>**** **** ****{card.number.slice(-4)}</Text>
                        </View>
                        <View>
                          <Text>{card.type}</Text>
                        </View>
                      </View>
                      <View style={styes.buttonDeleteCard}>
                        <Pressable onPress={async()=>{await deleteCard(key)}}>
                          <Text>Eliminar</Text>
                        </Pressable>
                      </View>
                      </View>
                  </View>
                )
              })
            }
          </>):(<></>) 
        }
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
    position:'relative',
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
  containerTextButton:{
    width:'100%',
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  buttonDeleteCard:{
    backgroundColor:'red',
    padding:5,
    borderRadius:10,
    position:'absolute',
    bottom:-10,
    right:-10,
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
  },
})