import { Pressable, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';



function Posteos() {
    const [posts, setPosts] = useState([]);
    const [Loading, setLoading] = useState(true);
    
    return(
             <FlatList
                data={posts}
                keyExtractor={item=>item.idtoString()}
                renderItem={({item})=> (<View><Text>{item.data.email}</Text>
           <Text>{item.data.description}</Text>
           <Pressable  onPress={()=>onSubmit()}>
                <Text>❤️</Text>
            </Pressable>
            <Text>{item.data.likes.length}</Text>
            <Pressable  onPress={()=>props.navigation.navigate('Comentarios', {id:item.id})}>
                <Text>Comentar</Text>
            </Pressable></View>)}/>
    )
}
const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    fontSize: 16,
    width: 500
  },
}) 

export default Posteos;