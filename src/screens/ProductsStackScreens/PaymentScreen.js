import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function PaymentScreen() {
  return (
    <SafeAreaView style = {styles.PaymentScreen}>
      <Text style = {styles.PaymentTitle} >Elija su método de pago</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  PaymentScreen:{
    width:'100%', 
    height:'100%', 
    backgroundColor:'white', 
  },
  PaymentTitle:{
    paddingTop:45,
    width:'100%',
    fontWeight:'300',
    fontSize:25,
    paddingLeft:20,
  },
})