import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/config'
import { FlatList } from 'react-native';
import { styleSheet } from 'react-native';




function Home() {
    const [Loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {auth.onAuthStateChanged(user => {if (!user){ props.navigation.navigate('Login')}})},[])
    db.collection('psots').onSnapshot(
        docs =>{
            let posts = []
            docs.forEach(doc =>{
                posts.push({
                    id: doc.id,
                    data:doc.data()
                })
            })
            setPosts('posts')
            setLoading(false)
        }
    )
    return(
        <View style={styles.container}>
           {Loading ? <Text>hols</Text>:<FlatList></FlatList>}
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    fontSize: 16,
    width: 500
  },
}) 

export default Home;