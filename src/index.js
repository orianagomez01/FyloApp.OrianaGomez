import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4oobcFBsOwrkjgIMXbM9tzReRp9v7zmM",
  authDomain: "fylo-app-f1d8a.firebaseapp.com",
  projectId: "fylo-app-f1d8a",
  storageBucket: "fylo-app-f1d8a.appspot.com",
  messagingSenderId: "560541733453",
  appId: "1:560541733453:web:adfac2cb750fb8afcd8204",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
