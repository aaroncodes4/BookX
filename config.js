// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaNLWmt-9egxbOsZqtvYFH5KJ8BkVhWRo",
  authDomain: "fir-auth-d0df2.firebaseapp.com",
  projectId: "fir-auth-d0df2",
  storageBucket: "fir-auth-d0df2.appspot.com",
  messagingSenderId: "158707461515",
  appId: "1:158707461515:web:7622366566bc621240538e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app