import { Pressable, View, Text , TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
import {useState} from 'react';
import {db, auth} from '../../firebase/config'

function Post (){

    const [texto, setTexto] = useState('');

    function onSubmit() {
    db.collection('posts').add({
        owner: auth.currentUser.email,
        descripcion: texto,
        createdAt: Date.now(),
        comentarios: [],
        likes: []
        })
        .then(() => {
            setTexto('')
            useLinkProps.navigation.navigate('StackMenu', {screen:'Home'})
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

}) 

export default Post;