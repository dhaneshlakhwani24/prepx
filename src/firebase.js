// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2_-vWUsMox6OcHq8dQYBILqtidDvKXIs",
  authDomain: "prepx-db001.firebaseapp.com",
  projectId: "prepx-db001",
  storageBucket: "prepx-db001.firebasestorage.app",
  messagingSenderId: "742859197237",
  appId: "1:742859197237:web:a7d3507bc99917bced5a7c",
  measurementId: "G-8SDF2BV1LR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, googleProvider, analytics };
