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

const trigger = document.getElementById("confirmButton");

function calcSeatingNumber(){
    const seatingIndex = JSON.parse(localStorage.getItem("selectedSeats"));

    let seat1;
    let array = [];
    
    for(let i = 0; i < seatingIndex.length; i++)
    {
        console.log(seatingIndex[i])

        if(seatingIndex[i] < 10)
        {
            seat1 = 'A' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 20)
        {
            seat1 = 'B' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 30)
        {
            seat1 = 'C' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 40)
        {
            seat1 = 'D' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 50)
        {
            seat1 = 'E' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 60)
        {
            seat1 = 'F' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 70)
        {
            seat1 = 'G' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        else if(seatingIndex[i] < 80)
        {
            seat1 = 'H' + (1 + seatingIndex[i] % 10);
            console.log(seat1);
            array.push(seat1);
            console.log(array);
            localStorage.setItem("seating", JSON.stringify(array));
            console.log(localStorage.getItem("seating"))
        }
        
    }
    addTempSeats()
    findData();
    update(ref(db, "Users/" + username + "/" + "Temporarily Information/"),{
        TotalPrice: localStorage.getItem("TotalPrice")
    })
    

}

function addTempSeats(){
    const seatsNumber = JSON.parse(localStorage.getItem('seating'))
    for(let i = 0; i < seatsNumber.length;i++){
        update(ref(db, "Users/" + username + "/" + "Temporarily Information/" + "Seating(s) selected/"),{
            seatsNumber
        })
    }
    // findDate();

}

function findData(){
    const dbref = ref(db);
    get(child(dbref, "Users/" + username + "/" + "Temporarily Information/" + "Seating(s) selected/"))
    .then((snapshot)=>{
        if(snapshot.exists()){
            localStorage.setItem("seats",JSON.stringify(snapshot.val().seatsNumber))
            console.log(localStorage.getItem("seats"))
            document.getElementById("showSeats").innerHTML = JSON.parse(localStorage.getItem("seats"))
        }
    })
}

trigger.addEventListener('click',calcSeatingNumber);