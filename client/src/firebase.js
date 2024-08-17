
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL-iSFIAE8wHFHZhwBbm1zXuQ0XJs6lio",
  authDomain: "clone-fd736.firebaseapp.com",
  projectId: "clone-fd736",
  storageBucket: "clone-fd736.appspot.com",
  messagingSenderId: "829472437853",
  appId: "1:829472437853:web:a549442a3eab5ba7d7ffb4",
  measurementId: "G-VMDT75TLGQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
