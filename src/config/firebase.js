// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzFa2ZvZf7BhPGwOQH7miUQMnHw1mtnWY",
  authDomain: "eventease-57207.firebaseapp.com",
  projectId: "eventease-57207",
  storageBucket: "eventease-57207.appspot.com",
  messagingSenderId: "274009757083",
  appId: "1:274009757083:web:c052a73076cb775b4cbd3e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const auth = getAuth();
export const firestore = getFirestore();