import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/config'
import { FlatList } from 'react-native';
import { styleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-web';

import Posteos from '../../components/Posteos/Posteos';




function Home(props) {
    const [Loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {auth.onAuthStateChanged(user => {
        if (!user)
            { props.navigation.navigate('Login')}
        else {
            db.collection('posts').orderBy('createdAt','desc').onSnapshot(
        docs =>{
            let posts = []
            docs.forEach(doc =>{
                posts.push({
                    id: doc.id,
                    data:doc.data()
                })
            })
            setPosts(posts)
            setLoading(false)
        }
    )
        }
    })},[])
    
    return(
        <View style={styles.container}>
           {Loading ? <ActivityIndicator style={{justifySelf: 'center',
    alignSelf: 'center',}} size='large' color='#381932'/>:<Posteos posts={posts} navigation={props.navigation}/>}
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
  
}) 

export default Home;