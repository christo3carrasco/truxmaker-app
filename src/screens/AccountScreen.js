import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
// components
import UserProfile from '../components/auth/UserProfile';
import AuthForm from '../components/auth/AuthForm';

// hook 
import { useData } from '../hooks/useData';

export default function AccountScreen() {
  const [data, setData] = useState(false); 
  const { userInfoDb } = useData(); 

  useEffect(()=>{
    (()=>{setData(userInfoDb)
      console.log(userInfoDb);
    })()
  },[userInfoDb])

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