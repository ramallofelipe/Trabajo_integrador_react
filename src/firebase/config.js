import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC5i0aFZhFgwsYt6yeZLDIQZAneLGbsCsM",
  authDomain: "frfirebase-4bb9a.firebaseapp.com",
  projectId: "frfirebase-4bb9a",
  storageBucket: "frfirebase-4bb9a.firebasestorage.app",
  messagingSenderId: "649863019070",
  appId: "1:649863019070:web:eccfb9c7aaaa0676fb6f6f"
};


app.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = app.firestore();