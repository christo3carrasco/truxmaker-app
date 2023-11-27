import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useData } from '../../hooks/useData';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function CartCard(props) {
    const {producto} = props;
    const { deleteProductToCart } = useData();  
    console.log('Estoy en cartcard',producto);
return (
    <View style = {styles.CartCard}>
        <Image style = {styles.ImageCard} source={{uri:producto.item.imagen}}/>
        <Text style = {styles.NombreCard}>{producto.item.nombre}</Text>
        <Text style = {styles.PrecioCard}>{producto.item.precio}</Text>
        <Pressable style={styles.ContaineIconTrash} onPress={()=>{deleteProductToCart(producto.index, producto.item.precio)}}>
            <Icon name='trash' size={20} color={'white'}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    CartCard:{
        display:'flex', 
        flexDirection:'row',
        justifyContent:'start',
        alignItems:'center',
        gap:10, 
        width:'100%',
        padding:10,
        borderStyle:'solid',
        borderWidth:0.4,
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