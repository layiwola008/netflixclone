
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUEPDIP1p4Xy7kL4XNQXWqBcaaT1XbxPU",
  authDomain: "netflix-fa053.firebaseapp.com",
  projectId: "netflix-fa053",
  storageBucket: "netflix-fa053.appspot.com",
  messagingSenderId: "1017254801688",
  appId: "1:1017254801688:web:d0a1b46f77479cb109ee6d"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);