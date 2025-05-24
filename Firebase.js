// Import the functions 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that 
const firebaseConfig = {
  apiKey: "AIzaSyBWkk22YE3UttPMfTriNNQE8wNhFouKclk",
  authDomain: "flare-bed84.firebaseapp.com",
  databaseURL: "https://flare-bed84-default-rtdb.firebaseio.com",
  projectId: "flare-bed84",
  storageBucket: "flare-bed84.firebasestorage.app",
  messagingSenderId: "319132750681",
  appId: "1:319132750681:web:11461ba719e680def03248",
  measurementId: "G-EENKWWJR5T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore();
const storage=getStorage();


export {auth,db,storage};