import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
// components
import UserProfile from '../components/auth/UserProfile';
import AuthForm from '../components/auth/AuthForm';

export default function AccountScreen() {
  const [data, setData] = useState(false); 
  return (
    <View style = {styles.AccountContainer}>
      {data ? <UserProfile/> : <AuthForm />}
    </View>
  )
}

const styles = StyleSheet.create({
  AccountContainer:{
    backgroundColor:'white',
    width:'100%', 
    height:'100%',
  }
}); 