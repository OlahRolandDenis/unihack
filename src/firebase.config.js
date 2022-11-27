// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMfbAwwLqzHZ6QIRYG3t96yCHxdNSjn94",
  authDomain: "unihack-9853c.firebaseapp.com",
  projectId: "unihack-9853c",
  storageBucket: "unihack-9853c.appspot.com",
  messagingSenderId: "365021547608",
  appId: "1:365021547608:web:a5bc6f34b9d67599844e2d",
  measurementId: "G-2M883963N4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

