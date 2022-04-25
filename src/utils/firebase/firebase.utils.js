import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk1a54WwNGYL5IskULt1GabVZsqpRAX3A",
  authDomain: "just-black-db.firebaseapp.com",
  projectId: "just-black-db",
  storageBucket: "just-black-db.appspot.com",
  messagingSenderId: "527279222306",
  appId: "1:527279222306:web:4f8eb4924a5e4d8a8d247b",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
