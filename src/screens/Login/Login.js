import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Register from '../Register/Register';
import HolaMenu from '../../components/HolaMenu/HolaMenu';
import { auth } from '../../firebase/config'



function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [loginError, setLoginError] = useState('');
    
    function onSubmit (email, pass) {
        if(mail.includes('@')){
            setLoginError("Email mal escrito")
        } else if(pass < 6){
            setLoginError("La contrasena debe tener mas de 6 caracteres")
        } else{
            auth.signInWithEmailAndPassword(email, pass)
    .then((response) => {
        setLogin(true);
        props.navigation.navigate('HolaMenu')
    })
    .catch(error => {
        setLoginError('Credenciales inválidas.')
    })
        }
   
 }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo} >Ingresar</Text>
            <TextInput style={styles.field} 
                        keyboardType='email-address'
                        placeholder='email'
                        onChangeText={ text => setEmail(text) }
                        value={email} />
                    <TextInput style={styles.field} 
                        keyboardType='default'
                        placeholder='password'
                        secureTextEntry={true} 
                        onChangeText={ text => setPassword(text) }
                        value={password}/> 
                <Pressable style={styles.boton} onPress={() => onSubmit(email,password)} >
                <Text> Ingresa </Text> 
                </Pressable>          
                {loginError ? <Text>{loginError}</Text> : null}   
            <Pressable style={styles.boton1} onPress={()=>props.navigation.navigate('Register')}>
                             <Text>No tengo cuenta</Text>
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
   boton1: {
    backgroundColor: '#ff0000',
    borderRadius: 5,
    width: 200,
    padding:5,
    alignItems: 'center',
    margin:5,
    fontWeight:500,
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
   field: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
   titulo : {
    fontSize: 30,
    fontWeight:700
   }
}) 

export default Login;