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

import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const db = getDatabase(); 
// const confirmBtn = document.getElementById("end");
const MovieName = localStorage.getItem("MovieName");
const MovieDate = localStorage.getItem("MovieDate");
const cinemaLocation = localStorage.getItem("cinemaLocation");
const movieTime = localStorage.getItem("movieTime");
const username = localStorage.getItem("username");
const bookingid = localStorage.getItem("bookingID");

function addBookingHistory(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    const currentDate = day + "-" + month + "-" + year;
    const  currentTime = date.getHours() + ":"+ date.getMinutes()
    const dbref = ref(db);

    get(child(dbref, "Users/" + username + "/" + "Temporarily Information")).then((snapshot) =>{
        if(snapshot.exists()){
            var cinema = snapshot.val().CinemaName;
            
            var date = snapshot.val().Date;
            
            var time = snapshot.val().Time;
        
            var venue = snapshot.val().Place;
            
            var movieprice = snapshot.val().TotalPrice;
            
            var subtotal_fnb = snapshot.val().SubTotalPriceFNB;
            if(subtotal_fnb === undefined){
                subtotal_fnb = 0;
            }
            
            var grandtotal = parseInt(subtotal_fnb) + parseInt(movieprice);
            update(ref(db,"Users/" + username + "/" + "Booking History/" + currentDate + " " + currentTime + "/"),{
                CinemaName: cinema,
                Date: date, 
                Time: time,
                Place: venue,
                GrandTotal: "RM" + grandtotal,  
                BookingID: bookingid
            })
            
        }
    })
    
    get(child(dbref, "Users/" + username + "/" + "Temporarily Information/" + "Seating(s) selected/")).then((snapshot) => {
        if (snapshot.exists()) {
            var seats = snapshot.val().seatsNumber;

            update(ref(db,"Users/" + username + "/" + "Booking History/" + currentDate + " " + currentTime + "/"),{
                seats
            })
        } else { console.log("Unavailable"); }
    })

    get(child(dbref,"Users/" + username + "/" + "Temporarily Information/" + "Food And Beverage/")).then((snapshot) =>{
        if (snapshot.exists()){
            var food = snapshot.val();
        
            update(ref(db,"Users/" + username + "/" + "Booking History/" + currentDate + " " + currentTime + "/"),{
                food
            })

            console.log(Object.values(food)[0].Quantity);
            console.log(Object.keys(food)[0]);
        }
    })
    addOccupiedSeats();
}

function addSeatsData(){
    const seatsNumber = JSON.parse(localStorage.getItem('occupiedSeats'))

    console.log(localStorage.getItem("movieTime"));
    set(ref(db, "Seating(s) occupied/" + cinemaLocation + "/"+ MovieName + "/" + MovieDate + "/" + movieTime + "/"),{
        seatsNumber
    })

    update(ref(db, "Seating(s) occupied/" + cinemaLocation + "/"+ MovieName + "/" + MovieDate + "/" + movieTime + "/"),{
        seatsNumber
    })
    localStorage.removeItem('selectedSeats');
    localStorage.removeItem('occupiedSeats');
    // findDate();

}


function addOccupiedSeats(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    const occupiedSeats = JSON.parse(localStorage.getItem('occupiedSeats'))
    for(let i = 0; i < selectedSeats.length; i++)
    {
        occupiedSeats[occupiedSeats.length] = selectedSeats[i];
        
    }
    occupiedSeats.sort(function(a,b){return a - b});
    console.log(occupiedSeats);
    
    localStorage.setItem('occupiedSeats',JSON.stringify(occupiedSeats));
    addSeatsData();
    
    // window.location.replace("receipt.html") ;
  
    

}



document.addEventListener('DOMContentLoaded',addBookingHistory)

