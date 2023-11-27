import { View, Text } from 'react-native'
import React from 'react'
//Stack Navigation 
import { createStackNavigator } from '@react-navigation/stack' 

//Screens
import StoreScreen from '../screens/StoreScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/ProductsStackScreens/CartScreen';
import PaymentScreen from '../screens/ProductsStackScreens/PaymentScreen';

const Stack = createStackNavigator(); 

export default function StoreNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='TruxStore' component={ StoreScreen } options={{
          headerTransparent:true,
          title:'',
        }}/>
        <Stack.Screen name='Product' component={ ProductScreen }/>
        <Stack.Screen name='Cart' component={ CartScreen }/>
        <Stack.Screen name='Payment' component={ PaymentScreen } options={{
          headerTransparent: true, 
          title:false, 
        }}/>
    </Stack.Navigator>
  )
}