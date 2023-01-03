// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQWAOGMELuEGge97X4rRpi6sHDhYPbtj4",
    authDomain: "fullstack-react-chat-916ba.firebaseapp.com",
    projectId: "fullstack-react-chat-916ba",
    storageBucket: "fullstack-react-chat-916ba.appspot.com",
    messagingSenderId: "853333667952",
    appId: "1:853333667952:web:368a02f25e7c0a464a44b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db =  getFirestore();
