// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4d57c.firebaseapp.com",
  projectId: "mern-blog-4d57c",
  storageBucket: "mern-blog-4d57c.firebasestorage.app",
  messagingSenderId: "656544362689",
  appId: "1:656544362689:web:69ba3038f68354fa93a440"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);