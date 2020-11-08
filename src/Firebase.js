import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxr1q3ZRCmvSmVgWg_ENldgKcGZDwIV-0",
    authDomain: "clone-166bb.firebaseapp.com",
    databaseURL: "https://clone-166bb.firebaseio.com",
    projectId: "clone-166bb",
    storageBucket: "clone-166bb.appspot.com",
    messagingSenderId: "175639410616",
    appId: "1:175639410616:web:80138e804e46ae4e13c14d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
