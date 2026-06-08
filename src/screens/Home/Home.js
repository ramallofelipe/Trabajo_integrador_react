import { Pressable, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';



function Home() {

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
            setPosteos('posts')
            setLoading(flase)
        }
    )
    return(
        <View style={styles.container}>
           {Loading ? a:<FlatList></FlatList>}
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