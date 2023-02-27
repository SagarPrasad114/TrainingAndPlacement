import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
 apiKey: "AIzaSyBtbz4Dxoj1PG-nfvA1XBmPjX4KvK5RzFk",
 authDomain: "placement-8b82d.firebaseapp.com",
 projectId: "placement-8b82d",
 storageBucket: "placement-8b82d.appspot.com",
 messagingSenderId: "3154872488",
 appId: "1:3154872488:web:e842d2d90b4ed0c4605a9d",
 measurementId: "G-K84YQ1D7FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
