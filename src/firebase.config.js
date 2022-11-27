// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2tN4qiqHUBt8XKbJpFSVZnP7EHbbKxE",
  authDomain: "ecorise-db1d2.firebaseapp.com",
  projectId: "ecorise-db1d2",
  storageBucket: "ecorise-db1d2.appspot.com",
  messagingSenderId: "975728436190",
  appId: "1:975728436190:web:e52787a6685ecfdea1b34f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);