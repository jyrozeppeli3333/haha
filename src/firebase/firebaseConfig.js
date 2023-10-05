import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnYb8mM3DiUY5CPGhwUE9twzz-OylxxwQ",
  authDomain: "project-final-5f214.firebaseapp.com",
  projectId: "project-final-5f214",
  storageBucket: "project-final-5f214.appspot.com",
  messagingSenderId: "100043830774",
  appId: "1:100043830774:web:ef18319315977a1cd303d7",
  measurementId: "G-WH6BBDJ0NG"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
