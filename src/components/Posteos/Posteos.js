import { Pressable, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase/config';
import firebase from 'firebase';

import Comentarios from '../../screens/Comentarios/Comentarios';


function Posteos(props) {
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
             <FlatList
                data={props.posts}
                keyExtractor={item=>item.id.toString()}
                renderItem={({item})=> (<View style={styles.post}><Text style={styles.mail}>{item.data.owner}</Text>
           <Text style={styles.texto}>{item.data.descripcion}</Text>
           <Pressable  onPress={()=>onSubmit(item.id,item.data.likes)}>
                <Text style={styles.corazon}>❤️</Text>
            </Pressable>
            <Text style={styles.textoC}>{item.data.likes.length}</Text>
            <Pressable style={styles.boton} onPress={() => props.navigation.navigate('Stackmenu',{screen:'Comentarios',  id: item.id })}>
                <Text style={styles.textoB}>Comentar</Text>
            </Pressable></View>)}/>
    )
}
const styles = StyleSheet.create({
  post:{
    width:330,
    marginBottom:15,
    borderRadius:30,
    borderColor:'#381932',
    borderWidth:2,
    padding:15,
    flex:1,
  },
   textoB:{
    color:"#FFF3E6"
  },
   boton: {
    backgroundColor: '#381932',
    borderRadius: 30,
    width: '30%',
    padding:10,
    alignItems: 'center',
    margin:5,
    fontWeight:500,
    position: 'absolute',
    bottom: 3,
    right: 3
   },
   mail : {
    fontSize: 17,
    fontWeight:700,
    color:'#381932',
   },
   texto : {
    fontSize: 15,
    fontWeight:700,
    color:'#381932',
    marginBottom:33
   },
   corazon:{
    position: 'absolute',
    bottom:0,
    left: 0
   },
   textoC:{
    position: 'absolute',
    bottom: 15,
    left: 40
   }
}) 

export default Posteos;