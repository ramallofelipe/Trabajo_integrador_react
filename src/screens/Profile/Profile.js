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
            <Text style={styles.titulo} >Mi perfil</Text> 
            <Text style={styles.texto}>Nombre de usuario: {usuario.user}</Text>
            <Text style={styles.texto}>Email: {usuario.mail}</Text>
            <Text style={styles.titulo} >Mis posts:</Text> 
            <Posteos posts={posts}/>

            <Pressable style={styles.boton} onPress={() => onSubmit()} >
                <Text style={styles.textoB}> Salir de la app </Text> 
                </Pressable>   
                     
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
   boton: {
    backgroundColor: '#381932',
    borderRadius: 30,
    width: 200,
    padding:10,
    alignItems: 'center',
    margin:5,
    fontWeight:500,
   },
   titulo : {
    fontSize: 30,
    fontWeight:700,
    color:'#381932',
    marginBottom:15,
    alignSelf:'flex-start'
   },
   textoB:{
    color:"#FFF3E6"
  },
  texto:{
    color: '#381932',
    marginBottom:10,
    alignSelf:'flex-start',
    marginLeft:35
  }
}) 

export default Profile;