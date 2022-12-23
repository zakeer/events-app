// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH-Ac4WUTMEi4y057yJ_Dp1iFnlQH7iwM",
  authDomain: "events-app-c7973.firebaseapp.com",
  projectId: "events-app-c7973",
  storageBucket: "events-app-c7973.appspot.com",
  messagingSenderId: "104122427838",
  appId: "1:104122427838:web:e003d9c72b060c4704b1ef"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);