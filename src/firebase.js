import firebase from "firebase";

const firebaseConfig = {};

const firebase = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
