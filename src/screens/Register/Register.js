import { View, Text, Pressable, TextInput } from "react-native";
import {StyleSheet} from 'react-native';
import {useState} from 'react'
import { auth, db } from '../../firebase/config';

function Register(props) {

    const [mail, setMail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [usuario, setUsuario] = useState('');

    const [register, setRegister] = useState(false);
    const [registerError, setRegisterError] = useState('');

    function onSubmit(mail, contraseña, usuario){
      auth.createUserWithEmailAndPassword(mail, contraseña)
      .then( response => {
        setRegister(true);
        props.navigation.navigate('Login');
        return db.collection('users').add({
                    email: mail,              
                    username: usuario,        
                    createdAt: new Date()     
                });
 })
      .catch( error => {
        setRegisterError(error.message)
 })
    }
  return (
    <View style = {styles.container}>
        <Text style = {styles.titulo}>Registro</Text>

        <TextInput style={styles.formulario} 
                        keyboardType='email-address'
                        placeholder='Mail'
                        onChangeText={ texto => setMail(texto) }
                        value={mail} />
                    <TextInput style={styles.formulario} 
                        keyboardType='default'
                        placeholder='Nombre de Usuario'
                        secureTextEntry={false} 
                        onChangeText={ texto=> setUsuario(texto) }
                        value={usuario}/>
                    <TextInput style={styles.formulario} 
                        keyboardType='default'
                        placeholder='Contraseña'
                        secureTextEntry={true} 
                        onChangeText={ texto => setContraseña(texto) }
                        value={contraseña}
                        /> 

        <Pressable style = {styles.boton} onPress ={() => onSubmit(mail, contraseña, usuario)}>
            <Text>Registrame</Text>
        </Pressable>

        <Pressable style={styles.boton1} onPress={()=>props.navigation.navigate('Login')}>
                                     <Text>Ya tengo cuenta</Text>
                        </Pressable>
        {registerError ? <Text>{registerError}</Text>: null}
    </View>
    
  );
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    fontSize: 16,
    width: 430,
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
  formulario: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    },
  boton: {
    backgroundColor: '#00ff2a',
    borderRadius: 5,
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

export default Register