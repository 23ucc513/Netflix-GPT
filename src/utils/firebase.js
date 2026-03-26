// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6FBkwU_mpAPdYu0j5zed2DalGMGDIeQw",
  authDomain: "netflixgpt-451f1.firebaseapp.com",
  projectId: "netflixgpt-451f1",
  storageBucket: "netflixgpt-451f1.firebasestorage.app",
  messagingSenderId: "282264865747",
  appId: "1:282264865747:web:912503e6639f78ff333d26",
  measurementId: "G-3WFT29YW2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();