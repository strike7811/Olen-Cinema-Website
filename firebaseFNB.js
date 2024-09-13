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

const username = localStorage.getItem("username");

var plus_behaviour = document.querySelectorAll(".plus")
var minus_behavior = document.querySelectorAll(".minus")

plus_behaviour.forEach(add =>{
    add.addEventListener('click', function storeData(e){
        addFNB();
        addPriceFNB();
    })
})

minus_behavior.forEach(add =>{
    add.addEventListener('click', function storeData(e){
        if(localStorage.getItem("quantity") > 0){
            addFNB();
            addPriceFNB();
        } else {
            removeFNB();
        }
    })
})

function addFNB(){
    set(ref(db, "Users/" + username + "/" + "Temporarily Information/" + "Food And Beverage/" + localStorage.getItem("name") + "/"),{
        Quantity: localStorage.getItem("quantity"),
        Price: localStorage.getItem("price")
    })

    update(ref(db, "Users/" + username + "/" + "Temporarily Information/" + "Food And Beverage/" + localStorage.getItem("name") + "/"),{
        Quantity: localStorage.getItem("quantity"),
        Price: localStorage.getItem("price")
    })
}

function addPriceFNB(){
    update(ref(db, "Users/" + username + "/" + "Temporarily Information/"),{
        SubTotalPriceFNB: localStorage.getItem("totalPriceFNB")
    })
}

function removeFNB(){
    remove(ref(db, "Users/" + username + "/" + "Temporarily Information/" + "Food And Beverage/"+ localStorage.getItem("name"))) 
    .catch((error)=>{
        alert(error);
    });
}
