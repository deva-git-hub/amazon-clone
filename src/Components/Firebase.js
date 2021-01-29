import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDURUSk3V0epkfBeN0HpqoZWtNsNRXwh2o",
  authDomain: "clear-store.firebaseapp.com",
  databaseURL: "https://clear-store.firebaseio.com",
  projectId: "clear-store",
  storageBucket: "clear-store.appspot.com",
  messagingSenderId: "1098380406055",
  appId: "1:1098380406055:web:07b92bb42dad91ff5acd02",
  measurementId: "G-FV7N8WTGDT",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { db, auth };
