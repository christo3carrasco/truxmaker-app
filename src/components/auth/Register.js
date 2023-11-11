import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Register() {
  return (
    <View style = {styles.RegisterCotainer}>
      <Text>Register</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    RegisterCotainer:{
        backgroundColor:'white',
        width:'100%',
        height:'auto',
    }
}); 