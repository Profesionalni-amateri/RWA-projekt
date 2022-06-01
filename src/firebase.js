import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPfa-fPqeNE6yeOpiEUqzq43PJ8ZMmR2Q",
  authDomain: "hrvatska-piva.firebaseapp.com",
  projectId: "hrvatska-piva",
  storageBucket: "hrvatska-piva.appspot.com",
  messagingSenderId: "80316890070",
  appId: "1:80316890070:web:1b1aa7e92f127fce570277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;