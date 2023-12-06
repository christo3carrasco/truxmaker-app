import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useData } from '../../hooks/useData.js'
import { getUserHistoryCarts } from '../../../services/Firebase/FirestoreFuncions';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryList from '../../components/Profile/HIstory/HistoryList.js';
export default function HistoryScreen() {
  const { userInfoDb } = useData(); 
  const [listHistory, setListHistory] = useState(null); 
  useEffect(()=>{
    (()=>{
      getHistoryData(); 
    })()
  },[])
  useEffect(() =>{
    console.log(listHistory);
  },[listHistory])

  const getHistoryData = async() => {
    const getHistory = await getUserHistoryCarts(userInfoDb.id); 
    setListHistory(getHistory); 
  }
  return (
    <SafeAreaView style = {styles.HistoryScreen}>
      <Text style = { styles.HistoryTitle }>Historial de compras</Text>
      {listHistory!=null?<HistoryList listHistory = {listHistory}/>:<ActivityIndicator
        size={'large'}
        color={'#264653'}
      />}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  HistoryScreen:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
  },
  HistoryTitle:{
    width:'100%',
    fontWeight:'300',
    fontSize:30,
    paddingTop:50,
    paddingLeft:20,
  }
})
