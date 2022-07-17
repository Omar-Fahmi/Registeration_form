// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA0OJ1O91iKNaVobDwZIIsgy0k1DxjG9ug",
    authDomain: "login-form-24f9f.firebaseapp.com",
    databaseURL: "https://login-form-24f9f-default-rtdb.firebaseio.com",
    projectId: "login-form-24f9f",
    storageBucket: "login-form-24f9f.appspot.com",
    messagingSenderId: "414861602270",
    appId: "1:414861602270:web:fdcabca46c58a920a8814f",
    measurementId: "G-P52ECDHZW8"
  };

const app = initializeApp(firebaseConfig);

// const databaseRef = firebase.database().ref();

// export const registerationRef = databaseRef.child("Registration");
export const auth = getAuth(app);