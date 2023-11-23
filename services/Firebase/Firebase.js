// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvqiv7IchmgrjOuIxqbWt8JMMe5dJMjJ0",
  authDomain: "truxmarket-app.firebaseapp.com",
  projectId: "truxmarket-app",
  storageBucket: "truxmarket-app.appspot.com",
  messagingSenderId: "202760072249",
  appId: "1:202760072249:web:97b2c0f1e2f1539ce831e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authPersistence = initializeAuth(app, {
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
export const auth = getAuth(app); 
export const db = getFirestore(app); 
export const storage = getStorage(app);  