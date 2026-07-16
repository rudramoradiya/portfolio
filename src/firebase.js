// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfF1qzTBzPyQbMS6q5neaDPaUjzJTcGB4",
  authDomain: "my-portfolio-bd42e.firebaseapp.com",
  projectId: "my-portfolio-bd42e",
  storageBucket: "my-portfolio-bd42e.firebasestorage.app",
  messagingSenderId: "310712413225",
  appId: "1:310712413225:web:ea93b3a82094e2720fc038"
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
