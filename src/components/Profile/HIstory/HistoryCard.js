import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function HistoryCard(props) {
  const {cart} = props; 
  const navigation = useNavigation();
  const goToCartDetails = () => {
    navigation.navigate('HistoryCartDetails',{ cart:cart.item })
  }; 
  return (
    <View style = {styles.CardConainer}>
      <View>
        {
          cart != [""] ? <Text>id: {cart.item.id}</Text>:<></>
        }
        <Text>{cart.item.date}</Text>
      </View>
      <Pressable onPress={()=>{goToCartDetails()}}>
        <Icon name='bars' size={30} color={'#264653'}/>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  CardConainer:{
    padding:10,
    margin:10,
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:0.4,
    width:'95%',
    display:'flex',
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center', 
  }, 
});