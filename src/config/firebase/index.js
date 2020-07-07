import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRNar73OPy-QMe2srOpAn0Hn1CGQELl90",
    authDomain: "simple-notes-firebase-ff130.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-ff130.firebaseio.com",
    projectId: "simple-notes-firebase-ff130",
    storageBucket: "simple-notes-firebase-ff130.appspot.com",
    messagingSenderId: "168836112456",
    appId: "1:168836112456:web:c1e5334c0afd338551387d",
    measurementId: "G-L7WLTTNZZ5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
// firebase.analytics();

export default firebase