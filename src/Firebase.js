// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT0aqolaH5hTBljxFBpYTbPQFqnvHAsZ8",
  authDomain: "johnsview-b78f5.firebaseapp.com",
  projectId: "johnsview-b78f5",
  storageBucket: "johnsview-b78f5.appspot.com",
  messagingSenderId: "165035128042",
  appId: "1:165035128042:web:b229290af0c34ee7f99393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // Optional, if you use Firestore
