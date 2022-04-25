import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk1a54WwNGYL5IskULt1GabVZsqpRAX3A",
  authDomain: "just-black-db.firebaseapp.com",
  projectId: "just-black-db",
  storageBucket: "just-black-db.appspot.com",
  messagingSenderId: "527279222306",
  appId: "1:527279222306:web:4f8eb4924a5e4d8a8d247b",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const usersDocRef = doc(db, "users", userAuth.uid);

  console.log(usersDocRef);

  const userSnapshot = await getDoc(usersDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(usersDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return usersDocRef;
};
