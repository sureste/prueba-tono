// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuMrW0caZTlmIyYyEES3sSI1CDs5brVZ4",
    authDomain: "sureste-test.firebaseapp.com",
    projectId: "sureste-test",
    storageBucket: "sureste-test.appspot.com",
    messagingSenderId: "950392218673",
    appId: "1:950392218673:web:a4bc962c6a2599c073e110",
    measurementId: "G-4H4HJ0NZHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);