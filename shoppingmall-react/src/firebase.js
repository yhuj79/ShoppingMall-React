import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { // eslint-disable-line no-unused-vars
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; // 내보내기