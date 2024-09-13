// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth, signInWithEmailAndPassword, sendPasswordResetEmail,onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, set, ref, update, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    // Your configs
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
const auth = getAuth();
const database = getDatabase(app);


submitData.addEventListener('click', () => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;

    const dbref = ref(database);

    // log in user
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // save log in details into real time database
            var lgDate = new Date();
            get(child(dbref, "Users/" + user.uid)).then((snapshot) => {
                if (snapshot.exists()) {
                    name = snapshot.val().name;
                    console.log("name check: " + name);
                    update(ref(database, 'Users/' + 'lastlogin'), {
                        last_login: lgDate,
                        email: email,
                        name: name
                    })
                    update(ref(database, 'Users/' + user.uid), {
                        last_login: lgDate,

                    })

                } else {
                    console.log("Unavailable");
                }

            })
                .then(() => {
                    // Data saved successfully!
                    alert('User logged in successfully');

                    //Redirect user to home page
                    window.location.replace("index.html");
                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
    
                console.log("userid:" + uid);
                // ...
                localStorage.setItem("username",uid)
    
            } else {
                // User is signed out
    
                // ...
            }
        });

});

document.getElementById("resetpwd").addEventListener("click", () => {
    if (confirm("Forgot Password?") == 1) {
        var email = document.getElementById('email').value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("Please check your email to reset password.");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(error);
            });
    }
})