// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYO3rknIP3JaMHRxkLnAyDMi2wc-sVYaQ",
  authDomain: "react-course-learnin.firebaseapp.com",
  projectId: "react-course-learnin",
  storageBucket: "react-course-learnin.appspot.com",
  messagingSenderId: "399322361548",
  appId: "1:399322361548:web:e158160bf38cc8e099dc69",
  measurementId: "G-S2K3NCW4JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)