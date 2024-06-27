// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpPan4RQDfPQt8RfKCqzTD8fYl8WPAw4M",
  authDomain: "chat-app-2cdec.firebaseapp.com",
  projectId: "chat-app-2cdec",
  storageBucket: "chat-app-2cdec.appspot.com",
  messagingSenderId: "549577959843",
  appId: "1:549577959843:web:8bda352cbefe4fac271216",
  measurementId: "G-MJZ8M55XBK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};