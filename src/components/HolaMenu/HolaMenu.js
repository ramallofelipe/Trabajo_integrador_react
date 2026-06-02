import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home/Home'
import Profile from '../../screens/Profile/Profile'

const Tab = createBottomTabNavigator();
function HolaMenu (){
    
    return(
        <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>

            <Tab.Screen 
            name = 'Home' 
            component = {Home}  
            options = {{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" />}} 
            />
            <Tab.Screen 
            name = 'Profile' 
            component = {Profile} 
            options = {{ tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />}} 
            />

        </Tab.Navigator>
    )
       
}

const styles = StyleSheet.create({
container: {
    fontSize: 16,
    alignItems: 'center',
    width: 430
  },
}) 

export default HolaMenu