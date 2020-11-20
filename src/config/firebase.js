import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDX7ALH1-kgEf6WkQOObwS33xLZBrGYZ4Q",
  authDomain: "makersmodo.firebaseapp.com",
  databaseURL: "https://makersmodo.firebaseio.com",
  projectId: "makersmodo",
  storageBucket: "makersmodo.appspot.com",
  messagingSenderId: "184081733204",
  appId: "1:184081733204:web:bfc3076a1e5e91b28d3fc1"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);