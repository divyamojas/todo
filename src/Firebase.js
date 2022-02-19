// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvAg_0OHfyboBdxse7RupCwsButDM0zf4",
  authDomain: "todo-myriad.firebaseapp.com",
  projectId: "todo-myriad",
  storageBucket: "todo-myriad.appspot.com",
  messagingSenderId: "190700381258",
  appId: "1:190700381258:web:3ddb7bc979c164fc9fb2b3",
  measurementId: "G-X07CR2HB9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
