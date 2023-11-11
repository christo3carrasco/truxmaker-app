import { View, Text } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

//Tab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//icons 
import Icon from "react-native-vector-icons/FontAwesome5"

//Stacks 
import AccountNavigation from './AccountNavigation'
import StoreNavigation from './StoreNavigation'
import HomeNavigation from './HomeNavigation'

const Tab = createBottomTabNavigator(); 

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name = 'Home' component={ HomeNavigation } options={{
        tabBarLabel:"Home",
        tabBarIcon: ({color, size}) => {
          return(
            <Icon name = 'home' color = {'#264653'} size = {size} />
          )
        }, 
      }}/>
      <Tab.Screen name = 'Store' component={ StoreNavigation } options={{
        tabBarIcon: ({color, size}) => {
          return(
            <Icon name = "store" size = {size} color = {'#264653'} />
          )
        },
      }}/>
      <Tab.Screen name = 'Account' component={ AccountNavigation } options={{
        tabBarLabel: "Account",
        tabBarIcon: ({color,size}) => {
          return(
            <Icon name = "user" size = {size} color = {'#264653'} solid></Icon>
          )
        }
      }}/>
    </Tab.Navigator>
  )
}