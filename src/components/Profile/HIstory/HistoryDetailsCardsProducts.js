import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function HistoryDetailsCardsProducts(props) {
    const { product } = props; 
    console.log(product);
  return (
    <View style = {styles.CartCard}>
        <Image style = {styles.ImageCard} source={{uri:product.imagen}}/>
        <Text style = {styles.NombreCard}>{product.nombre}</Text>
        <Text style = {styles.PrecioCard}>{parseFloat(product.precio.toFixed(2))}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    CartCard:{
        margin:10,
        display:'flex', 
        flexDirection:'row',
        justifyContent:'start',
        alignItems:'center',
        gap:10, 
        width:'95%',
        padding:10,
        borderStyle:'solid',
        borderWidth:0.4,
        borderRadius:10,
    },  
    ImageCard:{
        flex:1,
        width:30,
        height:30,
    },
    NombreCard:{
        flex:2,
    },
    PrecioCard:{
        flex:1,
    }, 
    ContaineIconTrash:{
        width:30,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'red',
        padding:5,
    }
})