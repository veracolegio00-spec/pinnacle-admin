import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDoyiysKHen2Llbij39KQno2tX7IgFHniI",
  authDomain: "pinnacle-admin.firebaseapp.com",
  projectId: "pinnacle-admin",
  storageBucket: "pinnacle-admin.appspot.com",
  messagingSenderId: "1045833793884",
  appId: "1:1045833793884:web:43e1f1a2324e35a2bc4199"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();