import { View, Text } from 'react-native'
import React from 'react'
// Stack Navigation 
import { createStackNavigator } from '@react-navigation/stack' 
// Screens
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();  

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Account" component={ AccountScreen } options={{
        title:'',
        headerTransparent:true, 
      }}/>
    </Stack.Navigator>
  )
}