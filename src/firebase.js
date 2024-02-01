// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUwai2mJlXEYIEK8n_XEWmnDma6iZrgHE",
  authDomain: "fix-health-13385.firebaseapp.com",
  projectId: "fix-health-13385",
  storageBucket: "fix-health-13385.appspot.com",
  messagingSenderId: "304649322867",
  appId: "1:304649322867:web:a394589bba1d09788ec506",
  measurementId: "G-388XZJKRQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);