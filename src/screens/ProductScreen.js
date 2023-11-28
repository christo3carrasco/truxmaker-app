import { View, Text, StyleSheet, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import { getOneProductApi } from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ProductScreen(props) {
  const {navigation, route:{params}} = props; 
  const [ product, setProduct ] = useState(null); 
  useEffect(()=>{
    (()=>{
      captureProduct();
    })()
  },[params])
  const captureProduct = async () => {
    const Product = await getOneProductApi(params.id);
    setProduct(Product); 
  }
  console.log(product);
  return (
    <ScrollView style = {styles.Product}>
      {
        product != null ?(
          <View style = {styles.ProdutContainer}>
            <Text style = {styles.ProductTitle}>{product.nombre}</Text>
            <Image source={{uri:product.imagen}} style = {styles.ProductImage}/>
            <Text style = {styles.TitleDescription}>Descripción</Text>
            <Text style = {styles.ProductDescription}>{product.description}</Text>
            <Text style = {styles.TitleDescription}>Categoria</Text>
            <Text style = {styles.ProductDescription}>{product.category}</Text>
            <Pressable style = {styles.Button}>
              <View style = {styles.ContainerText}>
                <Text style = {styles.ButtonText}>Añadir al carrito</Text>
                <Icon name='shopping-cart' color={'white'}/>
              </View>
              <Text style = {styles.ButtonPrice}>S/.{product.precio}</Text>
            </Pressable>
          </View>
          ):<ActivityIndicator style = {styles.Spinner} size={'large'} />
      }
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  Product:{
    position:'relative',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
  },
  Spinner:{
    position:'absolute',
    marginLeft:'50%',
    marginRight:'50%',
    marginTop:'50%',
    marginBottom:'50%',
    width:50,
    height:50,
  },
  ProdutContainer:{
    padding:30,
    paddingTop:5,
    gap:10,
    height:'100%',
    display:'flex',
    flexDirection:'column', 
    alignItems:'center',
    justifyContent:'space-around',
    // borderStyle:'solid',
    // borderWidth:10,
  },
  ProductTitle:{
    width:'100%',
    fontWeight:'900',
    fontSize:20,
  },
  ProductImage: {
    position: 'relative', 
    bottom: 2, 
    right: 2, 
    width: 250, 
    height: 250, 
    borderRadius:10,
  }, 
  TitleDescription:{
    width:'100%',
    fontWeight:'900',
    fontSize:18,
  },
  ProductDescription:{
    width:'100%'
  },
  Button:{
    padding:8,
    borderRadius: 10, 
    width:'80%',
    height:45,
    backgroundColor:'green',
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-around', 
    alignItems:'center',
    gap:30
  }, 
  ContainerText:{
    display:'flex', 
    flexDirection:'row', 
    gap:6, 
    justifyContent:'center',
    alignItems:'center',
    borderRightColor:'white', 
    paddingRight:15,
    borderRightWidth:1,  
  },
  ButtonText:{
    color:'white',
  },
  ButtonPrice:{
    color: 'white', 
    fontWeight:'bold', 
  }
})