import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu2a4JGw4QAly9mXX2XIX7xwl5FgxOmXs",
  authDomain: "html-cinema-website.firebaseapp.com",
  databaseURL: "https://html-cinema-website-default-rtdb.firebaseio.com",
  projectId: "html-cinema-website",
  storageBucket: "html-cinema-website.appspot.com",
  messagingSenderId: "1026541231122",
  appId: "1:1026541231122:web:0f475ffcf2fd36e5ce0ccb",
  measurementId: "G-HHT728KTKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get,update, remove, ref, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const db = getDatabase(); 

const username = localStorage.getItem("username");

function clearData(){
  remove(ref(db,"Users/" + username + "/Temporarily Information" ))
  localStorage.removeItem('seating')
  localStorage.removeItem('MovieDate')
  localStorage.removeItem('MovieName')
  localStorage.removeItem('movieTime')
  localStorage.removeItem('cinemaLocation')
  localStorage.removeItem('TotalPrice')
  localStorage.removeItem('quantity')
  localStorage.removeItem('price')
  localStorage.removeItem('totalPriceFNB')
  localStorage.removeItem('name')
  localStorage.removeItem('occupiedSeats')
  localStorage.removeItem('selectedSeats')
}

document.addEventListener('DOMContentLoaded',clearData)