const countdown = document.querySelector(".countsec");

// store remaining time
let remainingTime = 10;      
let allowedToSkip = false; //default
let popupTimer;

window.onload = () => {
    // display the overlay when active and remove when not active
    // check scroll value is > 100
        countDownTimer = setInterval(() => {
            console.log(remainingTime); //check from console

            //change the number of remaining time in html
            countdown.innerHTML = `You will be redirected to our main page in ${remainingTime} second(s)`;

            remainingTime--; //decrement time by one
            if (remainingTime < 0) {
                clearInterval(countDownTimer);
                window.location.replace("index.html");
            }
        }, 1000)
}