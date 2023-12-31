import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack' 

import HomeScreen from '../screens/HomeScreen'; 

const Stack = createStackNavigator(); 

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Home"  component={ HomeScreen } options={{
        title:'', 
        headerTransparent:true, 
      }}/>
    </Stack.Navigator>
  )
}