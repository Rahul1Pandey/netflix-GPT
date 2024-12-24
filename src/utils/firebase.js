// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGU6wzNA4yTkx8HkzO5-KeBRCpwNtLKUo",
  authDomain: "netflix-gpt-b40a9.firebaseapp.com",
  projectId: "netflix-gpt-b40a9",
  storageBucket: "netflix-gpt-b40a9.firebasestorage.app",
  messagingSenderId: "816416168388",
  appId: "1:816416168388:web:41cbb9781d98857d2aec91",
  measurementId: "G-KPYT9DCC6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


//npm install firebase