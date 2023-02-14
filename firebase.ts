import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBj2sDbWzhteunKE5rjwwKkDz6a3QrIbo",
    authDomain: "brody-gpt.firebaseapp.com",
    projectId: "brody-gpt",
    storageBucket: "brody-gpt.appspot.com",
    messagingSenderId: "887917334971",
    appId: "1:887917334971:web:91de25104f11c06e95f49e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
