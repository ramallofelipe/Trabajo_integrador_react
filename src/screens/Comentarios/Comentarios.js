import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();

function Comentarios (){
    
    
       
}

const styles = StyleSheet.create({
container: {
   alignItems: 'center',
    fontSize: 16,
    width: 430,
    backgroundColor: "#FFF3E6",
    flex:1,
    padding:20,
  },
}) 

export default Comentarios