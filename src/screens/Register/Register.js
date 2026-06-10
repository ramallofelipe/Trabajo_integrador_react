import { View, Text, Pressable, TextInput } from "react-native";
import {StyleSheet} from 'react-native';
import {useState, useEffect} from 'react'
import { auth, db } from '../../firebase/config';

function Register(props) {

    const [mail, setMail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [usuario, setUsuario] = useState('');

    const [register, setRegister] = useState(false);
    const [registerError, setRegisterError] = useState('');

    useEffect(() => {auth.onAuthStateChanged(user => {if (user){ props.navigation.navigate('HolaMenu')}})},[])

    function onSubmit(mail, contraseña, usuario){

      if (mail === '' || contraseña === '' || usuario === '') {
        setRegisterError('Todos los campos son obligatorios');
        return; 
    }
      auth.createUserWithEmailAndPassword(mail, contraseña)
      .then( response => {
        
        db.collection('users').add({
            email: mail,              
            username: usuario,        
            createdAt: Date.now()     
        })
      .then(() => {
          setRegister(true);
          props.navigation.navigate('Login')
        })
      })
      .catch(error => {
        setRegisterError("El Email o Contraseña son Invalidos")
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
            <Text style={styles.textoB}>Registrame</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=>props.navigation.navigate('Login')}>
                                     <Text style={styles.textoB}>Ya tengo cuenta</Text>
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
    backgroundColor: "#FFF3E6",
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
  },
  formulario: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#381932',
    padding: 10,
    marginVertical: 10,
    borderRadius: 30,
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
   titulo : {
    fontSize: 30,
    fontWeight:700,
    color:'#381932',
   },
   textoB:{
    color:"#FFF3E6"
  }
}) 

export default Register