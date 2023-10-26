import { View, Text } from 'react-native'
import React from 'react'
//Stack Navigation 
import { createStackNavigator } from '@react-navigation/stack' 

//Screens
import StoreScreen from '../screens/StoreScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator(); 

export default function StoreNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='TruxStore' component={ StoreScreen }/>
        <Stack.Screen name='Product' component={ ProductScreen }/>
    </Stack.Navigator>
  )
}