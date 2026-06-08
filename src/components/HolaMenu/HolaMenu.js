import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home/Home'
import Profile from '../../screens/Profile/Profile'
import Stackmenu from '../Stackmenu/Stackmenu' 
import Post from '../../screens/Post/Post'

const Stack = createNativeStackNavigator();

function HolaMenu (){
    
    return(
            
        <Stack.Navigator screenOptions={ { tabBarShowLabel: false } }>
            
            <Stack.Screen 
            name = 'Stackmenu' 
            component = {Stackmenu}  
            options = {{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,  headerShown: false }} 
            />
            <Stack.Screen 
            name = 'Post' 
            component = {Post} 
            options = {{ tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />,  headerShown: false}} 
            />
            <Stack.Screen 
            name = 'Profile' 
            component = {Profile} 
            options = {{ tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />,  headerShown: false}} 
            />

        </Stack.Navigator>
      
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