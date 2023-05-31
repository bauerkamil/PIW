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
    apiKey: "AIzaSyCfqKNwI8J_FYqKBcKtAcix0uQ5rxOOR4w",
    authDomain: "evilla-c87f3.firebaseapp.com",
    projectId: "evilla-c87f3",
    storageBucket: "evilla-c87f3.appspot.com",
    messagingSenderId: "659494024102",
    appId: "1:659494024102:web:e58551ed9a2660d7fa1567",
    measurementId: "G-S9L043SFCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);