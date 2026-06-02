import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import HolaMenu from './src/components/HolaMenu/HolaMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={ Register } />
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="HolaMenu" component={ HolaMenu } />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
