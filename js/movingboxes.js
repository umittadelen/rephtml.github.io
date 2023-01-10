// Get references to the boxes
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

// Add event listeners to the boxes to make them draggable
box1.addEventListener("mousedown", startDrag);
box2.addEventListener("mousedown", startDrag);
box3.addEventListener("mousedown", startDrag);
box4.addEventListener("mousedown", startDrag);
box5.addEventListener("mousedown", startDrag);

// Add global listener to end the drag
window.addEventListener('mouseup',endDrag);
window.addEventListener('mousemove',drag);

var active = null;
var currentX;
var currentY;
var initialX;
var initialY;

function startDrag(e) {
    initialX = e.clientX;
    initialY = e.clientY;
    active = e.target;
}

var active = null;
var currentX;
var currentY;
var initialX;
var initialY;
var boxes = [box1,box2,box3,box4,box5];
var maxZ = 4;
var minZ = 0;

function startDrag(e) {
  initialX = e.clientX;
  initialY = e.clientY;
  active = e.target;
}

function drag(e) {
    if (active) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    initialX = e.clientX;
    initialY = e.clientY;
    active.style.top = (active.offsetTop + currentY) + "px";
    active.style.left = (active.offsetLeft + currentX) + "px";

    // Check last movement direction to update the z-index of the boxes
    if (currentY < 0) {
        active.style.zIndex = maxZ; // Move the active box to the top
        maxZ++;
    } else if (currentY > 0) {
        active.style.zIndex = minZ; // Move the active box to the bottom
        minZ--;
    }
    }
}

function endDrag(e) {
  active = null;
}
