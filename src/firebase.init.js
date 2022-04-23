// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPup_b_ReDkmjFD5lMOczmaUTwAIrC-6g",
  authDomain: "ema-jone-simple-1ab91.firebaseapp.com",
  projectId: "ema-jone-simple-1ab91",
  storageBucket: "ema-jone-simple-1ab91.appspot.com",
  messagingSenderId: "298116541933",
  appId: "1:298116541933:web:837532d959021c6c0b8be4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth