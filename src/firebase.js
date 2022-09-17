// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzpF3K-UXyQH2-HYpEe1OeUAE68XV6cCw",
  authDomain: "todo-app-f6a40.firebaseapp.com",
  projectId: "todo-app-f6a40",
  storageBucket: "todo-app-f6a40.appspot.com",
  messagingSenderId: "294679096973",
  appId: "1:294679096973:web:f9a1cdc4c1a427203c3cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);