import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { // eslint-disable-line no-unused-vars
    apiKey: "AIzaSyDlXgTXiSCy8yTD_Q7pj_AlMKZrrimyOJ4",
    authDomain: "shoppingmall-react.firebaseapp.com",
    projectId: "shoppingmall-react",
    storageBucket: "shoppingmall-react.appspot.com",
    messagingSenderId: "761473588348",
    appId: "1:761473588348:web:5408bc18a2666bf3d37df9",
    measurementId: "G-68ZB3J0Q3Y"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; // 내보내기