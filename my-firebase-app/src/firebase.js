// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDBPS0iWdaJanInzSMJs4zWB_UuaV_YnA",
  authDomain: "pasya-8203f.firebaseapp.com",
  projectId: "pasya-8203f",
  storageBucket: "pasya-8203f.firebasestorage.app",
  messagingSenderId: "1019251567952",
  appId: "1:1019251567952:web:ec33d30954ea5122e4d055",
  measurementId: "G-K8KPX2TXQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);