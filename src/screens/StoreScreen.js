import { View, Text, FlatList, StyleSheet,  } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductsList from '../components/Products/ProductsList';
import { getAllProductsApi } from '../../services/Api';
import { API_HOST } from '../../utils/constants';
export default function StoreScreen() {
  const [ListProducts, setListProducts] = useState([]); 
  const [nextUrl, setNextUrl] = useState(null)
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
  return (
    <View>
      <ProductsList  ListProducts = {ListProducts} LoadMoreProducts = {loadProducts}/>
    </View>
  )
}
const styles = StyleSheet.create({
    StoreScreen:{

    },
});  