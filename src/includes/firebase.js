import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHjyzYlBUQguz4_ehtT9IEGHEQ6GlENeE",
  authDomain: "vuemusic-bdf8c.firebaseapp.com",
  projectId: "vuemusic-bdf8c",
  storageBucket: "vuemusic-bdf8c.appspot.com",
  appId: "1:55346148163:web:5f8edace978c71cd9e75f6",
  measurementId: "G-SRWWWNZ71Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, storage, songsCollection };
