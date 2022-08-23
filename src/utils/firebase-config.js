// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA5wgh9I0OpCUFQgh4hXfYbJTpz3dL9uB4",
  authDomain: "react-netflix-clone-7c183.firebaseapp.com",
  projectId: "react-netflix-clone-7c183",
  storageBucket: "react-netflix-clone-7c183.appspot.com",
  messagingSenderId: "685602368381",
  appId: "1:685602368381:web:08ac0c8df5f50d6e7dba14",
  measurementId: "G-3FHS4SEB3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)