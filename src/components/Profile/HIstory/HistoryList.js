import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import HistoryCard from './HistoryCard'

export default function HistoryList(props) {
  const {listHistory} = props; 
  return (
    <FlatList 
      data={listHistory}
      numColumns={1}
      showsVerticalScrollIndicator = {true}
      renderItem={(Cart)=>(<HistoryCard cart = {Cart}/>)}
    //   contentContainerStyle = {style.ListStyle}
    //   onEndReached={loadMoreProducts}
      onEndReachedThreshold={0.1}
    />
  )
}