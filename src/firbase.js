// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDm9vv1OXphfjDg29DUDjm0sDgvQh7uJc",
  authDomain: "terra-house-c49eb.firebaseapp.com",
  projectId: "terra-house-c49eb",
  storageBucket: "terra-house-c49eb.appspot.com",
  messagingSenderId: "168318091331",
  appId: "1:168318091331:web:b158186c21d7249ab7d4f6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()