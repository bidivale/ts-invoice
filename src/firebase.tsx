import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// Firebase configuration object containing keys and identifiers
const firebaseConfig = {
    apiKey: "AIzaSyBLd1br7KtnV1JrZydxvkywmOr1ss-2vCU",
    authDomain: "invoice-ts.firebaseapp.com",
    projectId: "invoice-ts",
    storageBucket: "invoice-ts.appspot.com",
    messagingSenderId: "90139521973",
    appId: "1:90139521973:web:4b638f5260cf28d4fd1ffc"
  };

  //init firebase
initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore();

//collection ref
export const colRef = collection(db, 'items')