const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".popup-container .skip-button");
const visitButton = document.querySelector(".popup-container .imageclass");


visitButton.onclick = function () {
    location.href = "food_beverage.html";}
// store remaining time
let remainingTime = 5;      
let allowedToSkip = false; //default
let popupTimer;

// create cookie so that the ad will only pop up in specific time

const createPopupCookie = () => {
    let expiresTime = 5; //in Minutes
    let date = new Date();
    //date.setTime(date.getTime() + expiresTime * 24 * 60 * 60 * 1000); //in days
    date.setTime(date.getTime() + expiresTime * 60 * 1000); //in minute

    let expires = "expires=" + date.toUTCString();
    document.cookie = `popupCookie=true; ${expires}; path=/;`
}

const showAd = () => {
    // display the overlay when active and remove when not active
    // check scroll value is > 100
    if (window.scrollY > 100) {
        document.getElementById("popupPosition").style.position = "fixed";
        document.getElementById("popupPosition").style.height = "100vh";
        popupOverlay.classList.add("active");
        popupTimer = setInterval(() => {
            //console.log(remainingTime); //check from console

            //change the number of remaining time in html
            skipButton.innerHTML = `Skip in ${remainingTime}(s)`;

            remainingTime--; //decrement time by one
            if (remainingTime < 0) {
                allowedToSkip = true;
                skipButton.innerHTML = "Skip";
                clearInterval(popupTimer);
            }
        }, 1000)
    }
}

const skipAd = () => {
    // remove active class from popupOverlay
    // function of skip button (remove popup when click 'skip')
    popupOverlay.classList.remove("active");
    document.getElementById("popupPosition").style.removeProperty("position");    
    document.getElementById("popupPosition").style.removeProperty("height");

    createPopupCookie();
}


skipButton.addEventListener("click", () => {
    if (allowedToSkip) {
        skipAd();
    }

})

const startTimer = () => {
    if (window.scrollY > 100) {
        showAd();
        window.removeEventListener("scroll", startTimer);
    }
}

// display popup when scroll
// window.addEventListener("scroll", () => {
//     showAd();
// })

// check if cookie is available
if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
    window.addEventListener("scroll", startTimer)
}

