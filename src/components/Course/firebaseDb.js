import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDqNOekIz_WDp1Dj9Rh-fxshriqu3SIA_s",
    authDomain: "cs394-eea91.firebaseapp.com",
    databaseURL: "https://cs394-eea91.firebaseio.com",
    projectId: "cs394-eea91",
    storageBucket: "cs394-eea91.appspot.com",
    messagingSenderId: "100267544727",
    appId: "1:100267544727:web:548eab5334c608a49559d2",
    measurementId: "G-J986NP9ZY0"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;