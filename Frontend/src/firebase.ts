// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { get } from "http";
// import {getAuth, GoogleAuthProvider} from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCPzDf_OOMUc1ZJsK47FPg4VII6LhcdfNs",
//   authDomain: "student-db-e018f.firebaseapp.com",
//   databaseURL: "https://student-db-e018f-default-rtdb.firebaseio.com",
//   projectId: "student-db-e018f",
//   storageBucket: "student-db-e018f.firebasestorage.app",
//   messagingSenderId: "45939738120",
//   appId: "1:45939738120:web:e2ecf8c59840f567af73bd",
//   measurementId: "G-K7NB34E1S9"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleAuthProvider = new GoogleAuthProvider











import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
