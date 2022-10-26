import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfw5N2W4ilNQIj5_CPEvZbWD0BRUe7-xo",
  authDomain: "vapeboss-ecommerce.firebaseapp.com",
  projectId: "vapeboss-ecommerce",
  storageBucket: "vapeboss-ecommerce.appspot.com",
  messagingSenderId: "680772900000",
  appId: "1:680772900000:web:7e32ce29c9926c7bb7e5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
