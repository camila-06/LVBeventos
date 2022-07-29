import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhjTJZVtYSeuRKGsbvgPvISlIL-I7IB1E",
  authDomain: "lbv-eventos.firebaseapp.com",
  projectId: "lbv-eventos",
  storageBucket: "lbv-eventos.appspot.com",
  messagingSenderId: "574404072957",
  appId: "1:574404072957:web:82c2d7a3d0da775c793594"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
