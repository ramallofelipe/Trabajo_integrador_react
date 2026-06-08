import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/config'
import { FlatList } from 'react-native';
import Posteos from '../../components/Posteos/Posteos';



function Profile(props) {
    const [usuario, setUsuario] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {auth.onAuthStateChanged(user => {
        if (!user){
             props.navigation.navigate('Login')
        } else {
            db.collection('posts').where('owner','==',user.email).onSnapshot(
                docs => {
                    let posts = []
                    docs.forEach( doc => {
                        posts.push({
                            id:doc.id,
                            data:doc.data()
                        })
                    }
                    
                    )
                    setPosts(posts)
                }
            )
            db.collection('users').where('email','==',user.email).onSnapshot(docs =>{docs.forEach(doc => {
                    setUsuario({user:doc.data().username,
                        mail:doc.data().email
                    })
                }
                )}
                
            )
            
        }
})},[])
    
    function onSubmit () {
        auth.signOut()
    .then(() => {
        props.navigation.navigate('Login');
    })
    .catch(error => {
        console.log(error);
    });
 }


    return(
        <View style={styles.container}>
            <Text style={styles.titulo} >Usuario</Text> 
            <Text>{usuario.user}</Text>
            <Text>{usuario.mail}</Text>
            <FlatList
            data={posts}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=> <Posteos />}/>

            
                <Pressable style={styles.boton} onPress={() => onSubmit()} >
                <Text> Salir de la app </Text> 
                </Pressable>          
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    fontSize: 16,
    width: 430
  },
   boton: {
    backgroundColor: '#28a745',
    borderRadius: 4,
    width: 200,
    padding:5,
    alignItems: 'center',
    margin:5,
    fontWeight:500,
   },
   titulo : {
    fontSize: 30,
    fontWeight:700
   }
}) 

export default Profile;