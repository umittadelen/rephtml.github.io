if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.alert("This web page may not work properly on your device, but you can still open it.")
}

// Get a reference to the footer element
var footer = document.getElementById("footer");

// Calculate the height of the footer and its contents
var footerHeight = footer.offsetHeight;

function changeBackgroundColor() {
    var color = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = color;
  }

  function resetBackgroundColor() {
    document.body.style.backgroundColor = "#8bd4c3";
  }

function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);

function to_p1() {
    document.getElementById("div1").style.display="block";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
}
function to_p2() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="block";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
}
function to_p3() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="block";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
}
function to_p4() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="block";
    document.getElementById("div5").style.display="none";
}
function to_p5() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="block";
}