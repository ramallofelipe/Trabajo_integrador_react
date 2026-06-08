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

import Comentarios from '../../screens/Comentarios/Comentarios'

const Stack = createNativeStackNavigator();

function Stackmenu (){
    
    return(
            
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="Comentarios" component={ Comentarios } />
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

export default Stackmenu