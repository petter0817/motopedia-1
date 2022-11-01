import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrp6_M0DCwOhl2IYPkut7gVD2X1vxq780",
  authDomain: "motopedia-7ea4f.firebaseapp.com",
  projectId: "motopedia-7ea4f",
  storageBucket: "motopedia-7ea4f.appspot.com",
  messagingSenderId: "241715503859",
  appId: "1:241715503859:web:a9951661e2701b1eeacd86",
  measurementId: "G-QR95PEM9YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)