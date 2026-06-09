import { Pressable, View, Text , TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
import {useState} from 'react';
import {db, auth} from '../../firebase/config'

function Post (props){

    const [texto, setTexto] = useState('');

    function onSubmit() {
    db.collection('posts').add({
        owner: auth.currentUser.email,
        descripcion: texto,
        createdAt: new Date(),
        comentarios: [],
        likes: []
        })
        .then(() => {
            setTexto('')
            props.navigation.navigate('Stackmenu', {screen:'Home'})
        })
        .catch(error => console.log(error))
    }
    return(
            <View style = {styles.container}>
                <Text style = {styles.titulo}>Crea tu Nuevo Post</Text>
                <TextInput style={styles.formulario} 
                            keyboardType='default'
                            placeholder='Descripcion de Tu Post'
                            secureTextEntry={false} 
                            onChangeText={ texto=> setTexto(texto) }
                            value={texto}
                             />
                <Pressable style = {styles.boton} onPress ={() => onSubmit()}>
                    <Text style = {styles.textoBoton}>Publicar Post</Text>
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
  textoBoton:{
    color: "#FFF3E6",
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

export default Post;