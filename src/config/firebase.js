// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmmokVteZqjYIMLataIxGuNGH8wPytWxA",
  authDomain: "vite-contact-54cb3.firebaseapp.com",
  projectId: "vite-contact-54cb3",
  storageBucket: "vite-contact-54cb3.appspot.com",
  messagingSenderId: "444261404642",
  appId: "1:444261404642:web:c3368a46ac6c10076273bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);