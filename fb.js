// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1PW1bEv2Ks4FZFWGYJ8btpKelaLpFTDg",
  authDomain: "digitalisim.firebaseapp.com",
  projectId: "digitalisim",
  storageBucket: "digitalisim.appspot.com",
  messagingSenderId: "236908555465",
  appId: "1:236908555465:web:133c7b9bd5f436e00bb118",
  measurementId: "G-TY251NQVE1"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );