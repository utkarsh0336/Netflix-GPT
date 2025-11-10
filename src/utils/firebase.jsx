// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO-mALbpGZzqU05Md_tDSoz2YZym8a4Yk",
  authDomain: "netflixgpt-26ee0.firebaseapp.com",
  projectId: "netflixgpt-26ee0",
  storageBucket: "netflixgpt-26ee0.firebasestorage.app",
  messagingSenderId: "878280116291",
  appId: "1:878280116291:web:ebf10aa3675d0c6a1cecf6",
  measurementId: "G-BT4PVYD5XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();