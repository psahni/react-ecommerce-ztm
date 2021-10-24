import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDi18kT3Ld4LhSeDmj5inBNBzG21iwIBfA",
  authDomain: "react-ecommerce-a9687.firebaseapp.com",
  projectId: "react-ecommerce-a9687",
  storageBucket: "react-ecommerce-a9687.appspot.com",
  messagingSenderId: "467752436470",
  appId: "1:467752436470:web:29f62a972ccbba9c1b62d7",
  measurementId: "G-7PSYZY4FVW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
