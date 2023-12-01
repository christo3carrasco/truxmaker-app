import { View, Text } from 'react-native'
import React from 'react'
// Stack Navigation 
import { createStackNavigator } from '@react-navigation/stack' 
// Screens
import AccountScreen from '../screens/AccountScreen';
import HistoryScreen from '../screens/AcountStackScreens/HistoryScreen';
import FavoritesScreen from '../screens/AcountStackScreens/FavoritesScreen';
import EditInfoScreen from '../screens/AcountStackScreens/EditInfoScreen';
import HistoryCartDetails from '../screens/AcountStackScreens/HistoryScreen/HistoryCartDetails';
import CardsScreen from '../screens/AcountStackScreens/CardsScreen';
import CardForm from '../screens/AcountStackScreens/CardForm/CardForm';

const Stack = createStackNavigator();  

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Account" component={ AccountScreen } options={{
        title:'',
        headerTransparent:true, 
      }}/>
      <Stack.Screen name='History' component={ HistoryScreen } options={{
        title:'', 
        headerTransparent:true, 
      }}/>
      <Stack.Screen name='HistoryCartDetails' component={ HistoryCartDetails } options={{
        title:'',
        headerTransparent:false, 
      }}/>

      <Stack.Screen name='Favorites' component={ FavoritesScreen } options={{
        title:'', 
        headerTransparent:true, 
      }}/>
      <Stack.Screen name='EditInfo' component={ EditInfoScreen } options={{
        title:'', 
        headerTransparent:true, 
      }}/>
      <Stack.Screen name='Cards' component={ CardsScreen } options={{
        title:'', 
        headerTransparent:true, 
      }}/>
      <Stack.Screen name='CardForm' component={ CardForm } options={{
        title:'', 
        headerTransparent:true, 
      }}/>
    </Stack.Navigator>
  )
}