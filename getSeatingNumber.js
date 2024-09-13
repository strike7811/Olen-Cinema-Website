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
const MovieName = localStorage.getItem("MovieName");
const MovieDate = localStorage.getItem("MovieDate");
const cinemaLocation = localStorage.getItem("cinemaLocation");
const movieTime = localStorage.getItem("movieTime");


function findData(){
    const dbref = ref(db);
    get(child(dbref, "Seating(s) occupied/" + cinemaLocation + "/"+ MovieName + "/" + MovieDate + "/" + movieTime + "/"))
    .then((snapshot)=>{
        if(snapshot.exists()){
            localStorage.setItem("occupiedSeats",JSON.stringify(snapshot.val().seatsNumber))
        }
    })
}

findData()
const timeCount = localStorage.getItem('timeCount');
setTimeout(() => {
    const loadinghide = document.querySelector(".load_container");
    loadinghide.style.display = 'none';
    
    if (timeCount < 1){
        window.location.reload()
        localStorage.setItem('timeCount',1)
        // setTimeout(() => {
            
        // }, 1000); //  time in milliseconds
        
    }
    
    
    
}, 1500); //  time in milliseconds

setTimeout(()=>{

    const summaryshow = document.querySelector(".content");
    summaryshow.style.display = 'flex';
    
},2000)

// document.addEventListener("DOMContentLoaded", findData)//
