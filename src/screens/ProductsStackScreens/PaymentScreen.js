import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function PaymentScreen() {
  return (
    <SafeAreaView style = {styles.PaymentScreen}>
      <Text>PaymentScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  PaymentScreen:{
    width:'100%', 
    height:'100%', 
    backgroundColor:'white', 
  }
})