// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZV0AXZ04x8cpQIT90eDCsTodt0b3bNKU",
    authDomain: "bibliotecadev.firebaseapp.com",
    databaseURL: "https://bibliotecadev-default-rtdb.firebaseio.com",
    projectId: "bibliotecadev",
    storageBucket: "bibliotecadev.appspot.com",
    messagingSenderId: "761507665214",
    appId: "1:761507665214:web:2fd7d8a9e0d4092ca9486f",
    measurementId: "G-DNRNCPKF2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);