// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7UG_XLvx5fJ5QoswV-9MZ8viIK0CqCjk",
  authDomain: "e-commerce-34da6.firebaseapp.com",
  projectId: "e-commerce-34da6",
  storageBucket: "e-commerce-34da6.firebasestorage.app",
  messagingSenderId: "1094837806418",
  appId: "1:1094837806418:web:5d819b4edcefcb3ec0c68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;