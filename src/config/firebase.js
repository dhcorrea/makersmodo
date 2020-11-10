import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDw4oZjhowoVvu61QV5g1LxOzfO9xXpfdQ",
  authDomain: "makersmodo-beta.firebaseapp.com",
  databaseURL: "https://makersmodo-beta.firebaseio.com",
  projectId: "makersmodo-beta",
  storageBucket: "makersmodo-beta.appspot.com",
  messagingSenderId: "684728342226",
  appId: "1:684728342226:web:88f5e7d8750a0486f67f0b",
  measurementId: "G-PGLJQDTGSD"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();