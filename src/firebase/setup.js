// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA6qw_MMlCVJ544VuGuUDfe9VdV4VvfXlU",
    authDomain: "disney-hotstart-84e0a.firebaseapp.com",
    projectId: "disney-hotstart-84e0a",
    storageBucket: "disney-hotstart-84e0a.appspot.com",
    messagingSenderId: "840637186443",
    appId: "1:840637186443:web:e249bd4dabafd21c61af8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)