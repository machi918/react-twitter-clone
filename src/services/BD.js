import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCC9Me6R1AA-I1VZ7YkB8on7qkto1VwjUo",
    authDomain: "react-twitter-clone-256fe.firebaseapp.com",
    projectId: "react-twitter-clone-256fe",
    storageBucket: "react-twitter-clone-256fe.appspot.com",
    messagingSenderId: "683740212763",
    appId: "1:683740212763:web:5f8be53f1cd0f1bb6a52be",
    measurementId: "G-3FS0XYX9QL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const BD = firebaseApp.firestore();
export default BD