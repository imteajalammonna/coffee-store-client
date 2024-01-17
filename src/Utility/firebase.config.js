// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj-FFLRmEcB1QjioIdolXWy_Eo0zECTXM",
    authDomain: "coffee-store-c45c5.firebaseapp.com",
    projectId: "coffee-store-c45c5",
    storageBucket: "coffee-store-c45c5.appspot.com",
    messagingSenderId: "196697333116",
    appId: "1:196697333116:web:f4629ab2aa731a737358f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;