import { View, Text, FlatList, StyleSheet,  } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductsList from '../components/Products/ProductsList';
import { getAllProductsApi } from '../../services/Api';
import { API_HOST } from '../../utils/constants';
export default function StoreScreen() {
  const [ListProducts, setListProducts] = useState([]); 
  // const [ offset, setOffset ] = useState(0); 
  // const [ limit, setLimit ] = useState(6); 
  // const [ apiUrl, setNewApiUrl ] = useState(`${API_HOST}/products?offset=${offset}&limit=${limit}`);   
  const [nextUrl, setNextUrl] = useState(null)
  useEffect(() => {
    (async()=>{
      await loadProducts(); 
    })()
  },[])

  const loadProducts = async () =>{
    try {
      // setNewApiUrl(`${API_HOST}/products?offset=${offset}&limit=${limit}`)
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