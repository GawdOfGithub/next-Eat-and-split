// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpiRWDLihB4jiIk9Vo26Sq2RwmJCsFPq0",
  authDomain: "next-eat-n-split.firebaseapp.com",
  projectId: "next-eat-n-split",
  storageBucket: "next-eat-n-split.appspot.com",
  messagingSenderId: "512008580458",
  appId: "1:512008580458:web:3dc34b176495610d068913",
  measurementId: "G-ZN2EVM0K0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);