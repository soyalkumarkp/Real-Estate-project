// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5d6c3.firebaseapp.com",
  projectId: "real-estate-5d6c3",
  storageBucket: "real-estate-5d6c3.appspot.com",
  messagingSenderId: "848648341647",
  appId: "1:848648341647:web:fcc2cb73145c9096f388fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
