import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CartCard from '../../../components/Cart/CartCard.js'
import React from 'react'
import HistoryDetailsCardsProducts from '../../../components/Profile/HIstory/HistoryDetailsCardsProducts.js';

export default function HistoryCartDetails(props) {
  const {navigation, route:{params}} = props; 
  console.log("History Details", params.cart.productsCart);
  return (
    <View style = {styles.HistoryCartDetails}>
      <Text style = {styles.HistoryCartDetailsTitle}>Detalle de compra</Text>
      <View style = {styles.HistoryCartDetailsInfo}>
        <Text style = {styles.HistoryCartDetailsSubTitle}> id: {params.cart.id}</Text>
        <Text style = {styles.HistoryCartDetailsSubTitle} > fecha: {params.cart.date}</Text>
        <Text style = {styles.HistoryCartDetailsSubTitle}> total: {params.cart.total}</Text>
      </View>
      <ScrollView style = {styles.HistoryCartDetailsProductsList}>
        {
          params.cart.productsCart.map((el,index)=>(
              <HistoryDetailsCardsProducts key={index} product = { el }/>
          ))
        }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  HistoryCartDetails:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
  },
  HistoryCartDetailsTitle:{
    width:'100%',
    fontWeight:'300',
    fontSize:30,
    paddingLeft:20,
  },
  HistoryCartDetailsInfo:{
    marginTop:10,
    marginBottom:10,
    display:'flex',
    gap:5,
  },
  HistoryCartDetailsSubTitle:{
    fontSize:17,
    paddingLeft:15,
    fontWeight:'bold',
  },
  HistoryCartDetailsProductsList:{
    display:'flex',
    gap:10,
  }
})