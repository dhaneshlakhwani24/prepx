import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

// Email/password signup
export async function signup(email, password, displayName) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName });
  }
  return userCredential.user;
}

// Email/password login
export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// Google login
export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  // User info is in result.user
  return result.user;
}
