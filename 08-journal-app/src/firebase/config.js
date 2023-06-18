// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUiF-ifrq9meYYSTid1ffAh4-7Ymia9lw",
  authDomain: "react-curso-2317f.firebaseapp.com",
  projectId: "react-curso-2317f",
  storageBucket: "react-curso-2317f.appspot.com",
  messagingSenderId: "348725499661",
  appId: "1:348725499661:web:5528417b702f1cfce78244"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth =  getAuth(FirebaseApp);
export const firebaseDB = getFirestore(FirebaseApp);
