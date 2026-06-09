import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


import Home from '../../screens/Home/Home'
import Profile from '../../screens/Profile/Profile'
import Stackmenu from '../Stackmenu/Stackmenu' 
import Post from '../../screens/Post/Post'

const Tab = createBottomTabNavigator();

function HolaMenu (){
    
    return(
            
        <Tab.Navigator style={styles.tab} screenOptions={ { tabBarStyle:{
    width:'90%',
    bottom: 20,
    left: 20,
    right: 20,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#381932',
  },
  tabBarShowLabel: false } }>
            
            <Tab.Screen 
            name = 'Stackmenu' 
            component = {Stackmenu}  
            options = {{ tabBarIcon: () => <AntDesign name="home" size={24} color="#FFF3E6" />,  headerShown: false, tabBarItemStyle:{alignSelf:'center'} }} 
            />
            <Tab.Screen 
            name = 'Post' 
            component = {Post} 
            options = {{ tabBarIcon: () => <FontAwesome name="plus" size={24} color="#FFF3E6" />,  headerShown: false, tabBarItemStyle:{alignSelf:'center'}}} 
            />
            <Tab.Screen 
            name = 'Profile' 
            component = {Profile} 
            options = {{ tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#FFF3E6" />,  headerShown: false, tabBarItemStyle:{alignSelf:'center'}}} 
            />

        </Tab.Navigator>
      
    )
       
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    fontSize: 16,
    width: 430,
    backgroundColor: "#FFF3E6",
    flex:1,
  },
  tab:{
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  }
}) 

export default HolaMenu