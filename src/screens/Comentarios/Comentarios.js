import React, { useEffect } from 'react';
import {Pressable, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { db } from '../../firebase/config';
import { ActivityIndicator, TextInput } from 'react-native';
import Posteos from '../../components/Posteos/Posteos';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();

function Comentarios (props){
    const [posts, setPosts] = useState({});
    const [Loading, setLoading] = useState(true);
    console.log(props.route.params.id)
    useEffect(()=>{db.collection('posts').doc(props.route.params.id).onSnapshot(
        doc =>{
            let post = {
            id: doc.id,
            data:doc.data()
        }
            setPosts(post)
            setLoading(false)
        }
        
        
    )},[])
    
    return(
       <View style={styles.container}>
           {Loading ? <ActivityIndicator style={{marginTop:400,
    alignSelf: 'center',}} size='large' color='#381932'/>:<View>
        <Text>{posts.data.owner}</Text>
        <Text>{posts.data.descripcion}</Text>
        <Text>{}</Text>
        <TextInput></TextInput>

        </View>}
        </View>
      
    )
       
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