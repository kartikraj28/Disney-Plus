import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBorcVLJu2mNvw8KSk3mL3ZhRrbuZnPvb0",
  authDomain: "disney-plus-94bad.firebaseapp.com",
  projectId: "disney-plus-94bad",
  storageBucket: "disney-plus-94bad.appspot.com",
  messagingSenderId: "204342618217",
  appId: "1:204342618217:web:d9950ea84ba57fc4405af8",
  measurementId: "G-ZV7XPRQG5T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
