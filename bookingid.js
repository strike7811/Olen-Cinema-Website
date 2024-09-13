const storeID = document.getElementById('genID');

storeID.addEventListener('click', () => {
    const getBookID = makeid(12);
    localStorage.setItem("bookingID", getBookID);
});



function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
