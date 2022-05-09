import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const fireBaseApp = initializeApp(firebaseConfig);

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

export const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation
) => {
  if (!userAuth) return;

  const usersDocRef = doc(db, "users", userAuth.uid);

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
        ...aditionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return usersDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
