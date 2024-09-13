import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
const auth = getAuth();
const analytics = getAnalytics(app);

import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const db = getDatabase();
const change = document.getElementById('loginname');
//const user = auth.currentUser;

const username = localStorage.getItem("username");


function getdata() {
    const dbref = ref(db);

    if (username != null) {
        get(child(dbref, "Users/" + username + "/")).then((snapshot) => {
            if (snapshot.exists()) {
                var name = snapshot.val().name;
                if (name != "noUser") { //means got user
                    console.log("name: " + name);
                    document.getElementById("noLogin").style.display = "none";
                    document.getElementById("noLogin1").style.display = "none";

                    change.innerHTML = name + " | Log Out";
                } else { //means no user log in
                    document.getElementById("loginname").style.display = "none";
                }

            } else { console.log("Unavailable"); }

        })
    }

}

// if (user !== null) {

//     // The user object has basic properties such as display name, email, etc.
//     const displayName = user.displayName;
//     const email = user.email;
//     const photoURL = user.photoURL;
//     const emailVerified = user.emailVerified;
//     console.log("hi",email);

//     // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//     const uid = user.uid;
//     user.providerData.forEach((profile) => {
//         console.log("  Sign-in provider: " + profile.providerId);
//         console.log("  Provider-specific UID: " + profile.uid);
//         console.log("  Name: " + profile.displayName);
//         console.log("  Email: " + profile.email);
//         console.log("  Photo URL: " + profile.photoURL);
//     });
// }



getdata();

//sign out user
document.getElementById("loginname").addEventListener("click", function () {
    if (confirm("Are you sure you want to logout? \nNote: All data will not be saved.") == 1) {
        signOut(auth).then(() => {
            // Sign-out successful.

            // update(ref(db, 'Users/' + user.uid), {
            //     last_login: lgDate
            // })
            const defaultUser = "noUser";

            update(ref(db, 'Users/' + 'lastlogin'), {
                name: defaultUser
            })


            console.log('Sign Out Successful.');
            alert('Sign Out Successful.\nRedirecting you to main page.');
            //refresh page
            //window.location.reload();
            window.location.replace("index.html");
        }).catch((error) => {
            // An error happened.
            console.log(error);
            alert('Sign Out Not Successful');
            console.log('Sign Out Unsuccessful.');
        });


        remove(ref(db, "Food And Beverage/"), {})
        remove(ref(db, "Seating(s) selected/"), {})
        remove(ref(db, "Information/"), {})
        localStorage.clear();

    }

})


