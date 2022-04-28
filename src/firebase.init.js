// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybngroW-qlJ5dmP0eRnkFxZRvvLCWXtg",
  authDomain: "ts-mackbook.firebaseapp.com",
  projectId: "ts-mackbook",
  storageBucket: "ts-mackbook.appspot.com",
  messagingSenderId: "27330722175",
  appId: "1:27330722175:web:bd39decde7380fe54fc24a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;