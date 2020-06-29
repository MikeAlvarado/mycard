import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCbPIaqGJjX62qE3tUx5AEc1WUanWOxfvE",
  authDomain: "nfc-mycard.firebaseapp.com",
  databaseURL: "https://nfc-mycard.firebaseio.com",
  projectId: "nfc-mycard",
  storageBucket: "nfc-mycard.appspot.com",
  messagingSenderId: "1084537326877",
  appId: "1:1084537326877:web:c9adf68f8b468b94d765f4",
  measurementId: "G-QHLJLE55E9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
