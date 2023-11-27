import { View, Text, FlatList, ActivityIndicator, StyleSheet, Pressable } from 'react-native'
import { useData } from '../../hooks/useData'
import { createCartApi, updateListCartsOnUser } from '../../../services/Firebase/FirestoreFuncions';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react'
import CartCard from '../../components/Cart/CartCard';

export default function CartScreen() {
  const { cart, userInfoDb } = useData(); 
  const [historyCartArrayState, sethistoryCartArrayState] = useState();
  const navigation = useNavigation(); 
  console.log('Estoy en el cartScreen',cart.id);
  console.log('Estoy en el cartScreen USERRR',userInfoDb);
  useEffect(()=>{
    sethistoryCartArrayState(userInfoDb.historyCartArray); 
  },[userInfoDb])
  const goToPayment = () => {
    navigation.navigate('Payment'); 
  }
  const handlePay = () => {
    updateListCartsOnUser(userInfoDb.id, cart.id, historyCartArrayState)
    createCartApi(cart); 
  }
  return (
    <View style = {styles.CartScreen}>
      <FlatList 
      data={cart.productsCart}
      numColumns={1}
      showsVerticalScrollIndicator = {true}
      renderItem={(producto)=>(<CartCard producto = {producto}/>)}
      // contentContainerStyle = {}
      // onEndReached={loadMoreProducts}
      onEndReachedThreshold={0.1}
    />
    <View style = {styles.TotalContainer}>
      <Text style = {styles.TotalText}> Total {cart.total.toFixed(2)}</Text>
      <Pressable style = {styles.ButtonPay} onPress={()=>{goToPayment()}}>
        <Text style = {styles.ButtonText}>Realizar el pago</Text>
        <Icon name='credit-card' size={15}/>
      </Pressable>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  CartScreen:{
    width:'100%', 
    height:'100%',
    backgroundColor:'white',
  },
  TotalContainer:{
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