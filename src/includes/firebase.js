import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHjyzYlBUQguz4_ehtT9IEGHEQ6GlENeE",
  authDomain: "vuemusic-bdf8c.firebaseapp.com",
  projectId: "vuemusic-bdf8c",
  storageBucket: "vuemusic-bdf8c.appspot.com",
  appId: "1:55346148163:web:5f8edace978c71cd9e75f6",
  measurementId: "G-SRWWWNZ71Z",
};

export default firebase.initializeApp(firebaseConfig);
