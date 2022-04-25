import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBaIdN0zlU8BBwB0lvUKWAB7emgUgLgsi8",
    authDomain: "e-commerce-reactjs-coderhouse.firebaseapp.com",
    projectId: "e-commerce-reactjs-coderhouse",
    storageBucket: "e-commerce-reactjs-coderhouse.appspot.com",
    messagingSenderId: "59645212041",
    appId: "1:59645212041:web:5e83b3f7aef664ead9dd58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);