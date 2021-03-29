import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCST13R70oEgSD0-PrhInzaNH_RW3MjDNI",
  authDomain: "linkedin-clone-6229f.firebaseapp.com",
  projectId: "linkedin-clone-6229f",
  storageBucket: "linkedin-clone-6229f.appspot.com",
  messagingSenderId: "26612393048",
  appId: "1:26612393048:web:918e902aef1d097a38d62d",
  measurementId: "G-WT7RTNXST8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
