import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard';

export default function ProductsList(props) {
  const { ListProducts, LoadMoreProducts } = props; 
  const loadMoreProducts = () => {
    (async()=>{
      // await LoadMoreProducts(); 
    })() 
  }
  return (
    <FlatList 
      data={ListProducts}
      numColumns={2}
      showsVerticalScrollIndicator = {true}
      renderItem={(producto)=>(<ProductCard product = {producto}/>)}
      contentContainerStyle = {style.ListStyle}
      onEndReached={loadMoreProducts}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator 
          size={'large'}
          style = {style.Spinner}
          color={'#AEAE'}
        />
      }
    />
  )
}
const style = StyleSheet.create({
  ListStyle: {
    padding:5,
    display:'flex',
  },
  Spinner: {
    marginTop:20, 
    marginBottom:60, 
  }
})