import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9R6Q2HsQaLmPVBYB_Fg6Ph0CkuGNwF5U",
  authDomain: "react-netflix-clone-a25f6.firebaseapp.com",
  projectId: "react-netflix-clone-a25f6",
  storageBucket: "react-netflix-clone-a25f6.appspot.com",
  messagingSenderId: "266545566845",
  appId: "1:266545566845:web:9ad9250631d08967fa8d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

