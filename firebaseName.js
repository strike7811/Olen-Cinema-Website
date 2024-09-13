// Import the functions you need from the SDKs you need
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
var Name = document.querySelector("#buttonBooking");

console.log(app)


function saveName(){
  // //Count of User
  // if(localStorage.clickcount){
  //   localStorage.clickcount = Number(localStorage.clickcount)+1;
  // }else {
  //   localStorage.clickcount = 1;
  // }

  //Set variable of information

  
  //Set the path and information in the firebase 
  set(ref(db, "Information/"/*+ localStorage.clickcount*/), {
    CinemaName: localStorage.getItem("MovieName")
    // Place: Place
  })
  //Response of sucessful insertion
  .then(()=>{
  })

  //Response of error 
  .catch(()=> {
    alert(error)
  });
}

Name.addEventListener('click',saveName);
            