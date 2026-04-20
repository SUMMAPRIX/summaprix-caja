import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvd7wUTP5Ew9BB5oHAUL_lvGHdmPv0or8",
  authDomain: "sumaprix.firebaseapp.com",
  projectId: "sumaprix",
  storageBucket: "sumaprix.firebasestorage.app",
  messagingSenderId: "1018428764358",
  appId: "1:1018428764358:web:9a15a7b234f637ff6627c7",
  measurementId: "G-9QC9VTLK4F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
