// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyk491994gG2LWzS3WLB0YUDdzssqX-go",
  authDomain: "portfolio-chaitanya.firebaseapp.com",
  projectId: "portfolio-chaitanya",
  storageBucket: "portfolio-chaitanya.firebasestorage.app",
  messagingSenderId: "35015275658",
  appId: "1:35015275658:web:fd9a4fbadbab6d6dfa6973"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
