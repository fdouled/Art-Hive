import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaRQYYhyF3GRPS0To7_Ih8QvUT7VG0j2A",
  authDomain: "arthive-68ad9.firebaseapp.com",
  projectId: "arthive-68ad9",
  storageBucket: "arthive-68ad9.appspot.com",
  messagingSenderId: "385650322612",
  appId: "1:385650322612:web:f0c65a34e776a4bb19bbe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);




