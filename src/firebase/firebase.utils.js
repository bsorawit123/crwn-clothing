import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLwVr-_NR8M_pjbCja4VXopQoxstYhiUw",
  authDomain: "crwn-db-4f164.firebaseapp.com",
  projectId: "crwn-db-4f164",
  storageBucket: "crwn-db-4f164.appspot.com",
  messagingSenderId: "968066319828",
  appId: "1:968066319828:web:53c77f9225cfc3b09a8241",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
