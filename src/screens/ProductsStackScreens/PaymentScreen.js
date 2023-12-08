import React, {useState, useEffect} from 'react'
import { useData } from '../../hooks/useData'
import { createCartApi, getAllCardsToUserApi, updateListCartsOnUser } from '../../../services/Firebase/FirestoreFuncions'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default function PaymentScreen() {
  const navigation = useNavigation(); 
  const { userInfoDb, cart, setCart} = useData()
  const [ cardsList, setCardsList ] = useState([]); 
  const [ isEmptyPayment, setIsEmptyPayment ] = useState(true); 
  const [ paymentMethod, setPaymentMethod ] = useState(false); 
  const [historyCartArrayState, sethistoryCartArrayState] = useState();
  
  //listener 
  const [ pay, setPay ] = useState(false); 

  useEffect(()=>{
    sethistoryCartArrayState(userInfoDb.historyCartArray); 
  },[userInfoDb])

  useEffect(()=>{
    (async()=>{
      if (userInfoDb != undefined) {        
        const userCards = await getAllCardsToUserApi(userInfoDb.id); 
        setCardsList(userCards); 
      }
    })()
  },[userInfoDb])

  useEffect(()=>{
    (async()=>{
      if (pay) {        
        navigation.navigate('Account'); 
        await handlePay()
          setCart({
            date: "",
            id:"", 
            idCard:"", 
            productsCart:[],
            total:0, 
          })
          setPaymentMethod({
            number:"0000000000000000", 
            type:"", 
          })
          setPay(!pay)
      }
    })()
  },[pay])

  const handlePayment = async(card) => {
    if (card === "") {
    
    }
    else{
      setCart({...cart,['idCard']:card.idCard})
      setPay(!pay)
    }
  }
  const handlePay = async() => {
    await updateListCartsOnUser(userInfoDb.id, cart.id, historyCartArrayState)
    await createCartApi(cart); 
  }
  
  return (
    <SafeAreaView style = {styles.PaymentScreen}>
      <Text style = {styles.PaymentTitle} >Elija su método de pago</Text>
       {
          cardsList != undefined?(<>
            {
              cardsList.map((card, key)=>{
                return(
                  <View key={key} style = {styles.ContainerButton}>
                    <View style = {styles.CardToPayment}>
                      <View style={styles.containerTextButton}>
                        <View> 
                          <Text>**** **** ****{card.number.slice(-4)}</Text>
                        </View>
                        <View>
                          <Text>{card.type}</Text>
                        </View>
                      </View>
                      {
                        setIsEmptyPayment? (
                        <View style={styles.buttonAddCard}>
                          <Pressable
                            onPress={()=>{
                              setIsEmptyPayment(false)
                              setPaymentMethod(card)
                            }}  
                          >
                            <Text style = {styles.buttonTextAdd}>Añadir</Text>
                          </Pressable>
                        </View>
                        ) : (
                          <></>
                        )
                      }
                      </View>
                  </View>
                )
              })
            }
          </>):(<></>) 
        }
          {
            !isEmptyPayment ? (<>
                  <View style = {styles.ContainerButton}>
                    <Text style = {styles.PaymentTitle}>Método de pago</Text>
                    <View style = {styles.CardToPayment}>
                      <View style={styles.containerTextButton}>
                        <View> 
                          <Text>**** **** ****{paymentMethod.number.slice(-4)}</Text>
                        </View>
                        <View>
                          <Text>{paymentMethod.type}</Text>
                        </View>
                      </View>
                        <View style={styles.buttonDeleteCard}>
                          <Pressable
                            onPress={()=>{
                              setIsEmptyPayment(true)
                              setPaymentMethod("")
                            }}  
                          >
                            <Text style = {styles.buttonTextAdd}>Quitar</Text>
                          </Pressable>
                        </View>
                      </View>
                  </View>

            </>):(<>
            </>) 
          }
      <View style = {styles.TotalContainer}>
          <Text style = {styles.TotalText}> Total {cart.total.toFixed(2)}</Text>
          <Pressable style = {styles.ButtonPay} onPress={()=>{handlePayment(paymentMethod)}}>
            <Text style = {styles.ButtonText}>Realizar la comprar</Text>
            <Icon name='credit-card' size={15}/>
          </Pressable>
      </View>         
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  PaymentScreen:{
    position:'relative',
    width:'100%', 
    height:'100%', 
  },
  PaymentTitle:{
    paddingTop:45,
    width:'100%',
    fontWeight:'300',
    fontSize:25,
    paddingLeft:20,
  },
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
  CardToPayment:{
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
  buttonTextAdd:{
    color:'white'
  },
  buttonTextDelete:{
    color:'white'
  },
  containerTextButton:{
    width:'100%',
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  buttonAddCard:{
    backgroundColor:'green',
    padding:5,
    borderRadius:10,
    position:'absolute',
    bottom:-10,
    right:-10,
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
  CartScreen:{
    width:'100%', 
    height:'100%',
    backgroundColor:'white',
  },
  TotalContainer:{
    position:'absolute',
    bottom:0,
    backgroundColor:'#264653',
    width:'100%',
    height:50,
    display:'flex', 
    flexDirection:'row',
    justifyContent:'start',
    alignItems:'center', 
  },
  TotalText:{
    color:'white',
    padding:5,
    flex:1,
    fontSize:15,
    fontWeight:'bold',
  },
  ButtonPay:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e9c46b',
    padding:5,
    marginRight:10,
    borderRadius:10,
  },
  ButtonText:{
    fontWeight:'bold',
  }
})