// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP7haqHDoFP9L5-eb1NWPLdL1I0XMIwV0",
  authDomain: "cc-ecommerce-4b1c0.firebaseapp.com",
  projectId: "cc-ecommerce-4b1c0",
  storageBucket: "cc-ecommerce-4b1c0.appspot.com",
  messagingSenderId: "868780824194",
  appId: "1:868780824194:web:f93e3cf7ffad16d0d8469b"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() :  initializeApp(firebaseConfig);

const db = getFirestore()
export { db, app }