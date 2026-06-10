import React, { useEffect } from 'react';
import {Pressable, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { db,auth } from '../../firebase/config';
import { ActivityIndicator, TextInput } from 'react-native';
import firebase from 'firebase';


import Posteos from '../../components/Posteos/Posteos';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native-web';



const Stack = createNativeStackNavigator();

function Comentarios (props){
    const [posts, setPosts] = useState({});
    const [Loading, setLoading] = useState(true);
    const [coment, setComent] = useState('');
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
    function comentario(){
        let comentario = {mail:auth.currentUser.email,texto: coment}
        db.collection('posts').doc(props.route.params.id).update({
            comentarios:firebase.firestore.FieldValue.arrayUnion(
              comentario
          )
    })
    }
    function onSubmit(id,likes){
          if(likes.includes(auth.currentUser.email)){
            db.collection('posts').doc(id).update({
          likes: firebase.firestore.FieldValue.arrayRemove(
              auth.currentUser.email
          )
      })
          } else {
            db.collection('posts').doc(id).update({
                likes: firebase.firestore.FieldValue.arrayUnion(
              auth.currentUser.email
          )
          })
          }
        }
    return(
       <View style={styles.container}>
           {Loading ? <ActivityIndicator style={{marginTop:400,
    alignSelf: 'center',}} size='large' color='#381932'/>:<View style={styles.container}>
        <Text style={styles.mail}>{posts.data.owner}</Text>
        <Text style={styles.texto}>{posts.data.descripcion}</Text>
        <Pressable  onPress={()=>onSubmit(posts.id, posts.data.likes)}>
            <Text style={styles.corazon}>❤️</Text>
        </Pressable>
        <Text style={styles.textoC}>{posts.data.likes.length}</Text>
        <TextInput
        style={styles.input}
         placeholder="Escribí un comentario..." value={coment} onChangeText={ text => setComent(text) }/>
        <Pressable style={styles.boton} onPress={()=>comentario()}>
            <Text style={styles.textoB}>Agregar comentario</Text>
        </Pressable>
        <FlatList data={posts.data.comentarios}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={({item})=> (<View style={styles.comentario}><Text style={styles.mail}>{item.mail}</Text><Text style={styles.texto}>{item.texto}</Text></View>)}/>
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
  comentario:{
    alignItems: 'center',
    fontSize: 16,
    width: 390,
    backgroundColor: "#FFF3E6",
    flex:1,
    padding:10,
    marginBottom:15,
    borderWidth:3,
    borderRadius:30,
    borderColor:'#381932',
  },
textoC:{
    fontSize: 15,
    fontWeight:700,
    color:'#381932',
    alignSelf:'flex-end',
    marginRight:20
   },
   corazon:{
    position:'absolute',
    right:-150
   },
   textoB:{
    fontSize: 15,
    fontWeight:700,
    color:"#FFF3E6",
    
   },
   input:{
    width: 390,
        borderWidth: 1,
        borderColor: '#381932',
        padding: 10,
        marginVertical: 10,
        borderRadius: 30,
        color:'#381932',
        height:70,
   },
   mail : {
    fontSize: 19,
    fontWeight:700,
    color:'#381932',
    alignSelf:'flex-start'
   },
   texto : {
    fontSize: 18,
    fontWeight:700,
    width:390,
    color:'#381932',
    marginBottom:33,
    alignSelf:'flex-start',
    marginTop:10
   },
   boton: {
    backgroundColor: '#381932',
    borderRadius: 30,
    width: 390,
    padding:10,
    alignItems: 'center',
    margin:5,
    fontWeight:500,
    marginBottom:25
   }
}) 

export default Comentarios