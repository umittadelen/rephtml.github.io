var x = document.getElementById("locationid");

function getLocation() {
    //Check if Geolocation is supported 
    if (navigator.geolocation) {
    //the watchposition() method show the position of the user and update it while is moving
        navigator.geolocation.watchPosition(showPosition);
    } else { 
    //If not, display a message to the user
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
//The showPosition() function outputs the Latitude and Longitude
function showPosition(position) {
    x.innerHTML = position.coords.latitude + "N   " + position.coords.longitude + "E";
}