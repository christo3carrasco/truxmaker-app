import { View, Text, FlatList, StyleSheet, Pressable,TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductsList from '../components/Products/ProductsList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAllProductsApi } from '../../services/Api';
import { API_HOST } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native'
import { useData } from '../hooks/useData';

export default function StoreScreen() {
  const [ListProducts, setListProducts] = useState([]); 
  const [nextUrl, setNextUrl] = useState(null)
  const { cart } = useData(); 
  const navigate = useNavigation(); 
  useEffect(() => {
    (async()=>{
      await loadProducts(); 
    })()
  },[])

  const loadProducts = async () =>{
    try {
      const response = await getAllProductsApi(nextUrl);
      setListProducts([...ListProducts, ...response]);  
    } catch (error) {
      console.log(error);
    }    
  }
  const goToCart = () => {
    navigate.navigate('Cart')
  } 
  console.log(cart.productsCart.length);
  return (
    <SafeAreaView style = {styles.StoreScreen}>
      <View style = {styles.StoreTitleContainer}>
        <Text style = {styles.StoreTitle}>
          TruxStore
        </Text>
          <Pressable style = {styles.StoreCart} onPress={()=>{goToCart()}}>
              <Icon name='shopping-basket' color={'#264653'} size={25} onPress={()=>{goToCart()}}/>
              {
                cart.productsCart.length == 0?<></>:(
                <View style = {styles.countItems} >
                  <Text>
                    {cart.productsCart.length}
                  </Text>
                </View>
                )
              }
          </Pressable>
      </View>
      <ProductsList  ListProducts = {ListProducts} LoadMoreProducts = {loadProducts}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    StoreScreen:{
      height:'100%',
      backgroundColor:'white',
      position:'relative', 
    },
    StoreTitleContainer: {
      backgroundColor:'#264653',
      display:'flex',
      justifyContent:'center',
      height:60,

    },
    StoreTitle:{
      textAlign:'center',
      color:'white',
      fontSize:25,
      fontWeight:'bold',
    },
    StoreCart:{
      zIndex:1,
      width:40,
      height:40,
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:20,
      backgroundColor:'white',
      padding:5,
      position:'absolute',
      right:10,
    },
    countItems:{
      borderRadius:20,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:25,
      height:25,
      padding:2,
      position:'absolute',
      top:-6,
      right:-6,
      backgroundColor:'red',
      color:'white',
    }
});  
