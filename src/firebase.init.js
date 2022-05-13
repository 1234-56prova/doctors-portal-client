// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv-iJcU2pE-RRZOZd-_mTNX3Vglc_ZLMw",
  authDomain: "doctors-portal-159b4.firebaseapp.com",
  projectId: "doctors-portal-159b4",
  storageBucket: "doctors-portal-159b4.appspot.com",
  messagingSenderId: "923244729184",
  appId: "1:923244729184:web:373febc346126049fa8405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;