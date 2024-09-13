const check = document.getElementById("loginname");

document.querySelector("bookbutton").addEventListener("click", () => {

    if (check.style.display === 'none') { //means no user sign in
        alert("Please sign in before proceed to bookings.");
    } else {
        alert("ok");
        window.location.href = "nsm2v.html"
    }
})