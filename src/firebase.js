import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBPfa-fPqeNE6yeOpiEUqzq43PJ8ZMmR2Q",
  authDomain: "hrvatska-piva.firebaseapp.com",
  databaseURL: "https://hrvatska-piva-default-rtdb.firebaseio.com",
  projectId: "hrvatska-piva",
  storageBucket: "hrvatska-piva.appspot.com",
  messagingSenderId: "80316890070",
  appId: "1:80316890070:web:1b1aa7e92f127fce570277"

/*  apiKey: "AIzaSyBxaNQ8kVQ2_N4fix2IDnVOjaJQSotj7TY",
  authDomain: "hrvatska-piva2.firebaseapp.com",
  databaseURL: "https://hrvatska-piva2-default-rtdb.firebaseio.com",
  projectId: "hrvatska-piva2",
  storageBucket: "hrvatska-piva2.appspot.com",
  messagingSenderId: "549200162326",
  appId: "1:549200162326:web:2b71852f5d567f62a24f37",
  measurementId: "G-VVLER5DL7M"*/
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;