import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Register from '../Register/Register';
import HolaMenu from '../../components/HolaMenu/HolaMenu';
import { auth } from '../../firebase/config'



function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [loginError, setLoginError] = useState('');
    
    function onSubmit (email, pass) {
        if(!email.includes('@')){
            setLoginError("Email mal escrito")
        } else if(pass.length < 6){
            setLoginError("La contraseña debe tener mas de 6 caracteres")
        } else{
            auth.signInWithEmailAndPassword(email, pass)
    .then((response) => {
        setLogin(true);
        props.navigation.navigate('HolaMenu')
    })
    .catch(error => {
        setLoginError("El Email o Contraseña son Invalidos")
    })
        }
 }
 useEffect(() => {auth.onAuthStateChanged(user => {if (user){ props.navigation.navigate('HolaMenu')}})},[])

    return(
        <View style={styles.container}>
            <Text style={styles.titulo} >Ingresar</Text>
            <TextInput style={styles.formulario} 
                        keyboardType='email-address'
                        placeholder='email'
                        onChangeText={ text => setEmail(text) }
                        value={email} />
                    <TextInput style={styles.formulario} 
                        keyboardType='default'
                        placeholder='password'
                        secureTextEntry={true} 
                        onChangeText={ text => setPassword(text) }
                        value={password}/> 
                <Pressable style={styles.boton} onPress={() => onSubmit(email,password)} >
                <Text style={styles.textoB}> Ingresa </Text> 
                </Pressable>          
                {loginError ? <Text>{loginError}</Text> : null}   
            <Pressable style={styles.boton} onPress={()=>props.navigation.navigate('Register')}>
                             <Text style={styles.textoB}>No tengo cuenta</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
  },
  textoB:{
    color:"#FFF3E6"
  },
   boton: {
    backgroundColor: '#381932',
    borderRadius: 30,
    width: '80%',
    padding:10,
    alignItems: 'center',
    margin:5,
    fontWeight:500,
   },
   formulario: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#381932',
        padding: 10,
        marginVertical: 10,
        borderRadius: 30,
        color:'#381932',
    },
   titulo : {
    fontSize: 30,
    fontWeight:700,
    color:'#381932',
   }
}) 

export default Login;