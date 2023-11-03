import { View, Text, FlatList, StyleSheet,  } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductsList from '../components/Products/ProductsList';
import { getAllProductsApi } from '../../services/Api';
export default function StoreScreen() {
  const [ListProducts, setListProducts] = useState([]); 
  useEffect(() => {
    (async()=>{
      await loadProducts(); 
    })()
  },[])

  const loadProducts = async () =>{
    try {
      const response = await getAllProductsApi(); 
      const arrayProducts = [];
      setListProducts(response); 
    } catch (error) {
      console.log(error);
    }    
  }
  return (
    <View>
      <Text>Products List</Text>
      <ProductsList  />
    </View>
  )
}
const styles = StyleSheet.create({
  
});  