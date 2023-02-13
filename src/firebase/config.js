import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz7sCozBvVPsQclJCozPSCJ9y8PHivpgk",
  authDomain: "miniblog-24a5a.firebaseapp.com",
  projectId: "miniblog-24a5a",
  storageBucket: "miniblog-24a5a.appspot.com",
  messagingSenderId: "616151463883",
  appId: "1:616151463883:web:2db84311aee3092831a84e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };