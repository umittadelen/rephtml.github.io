if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.alert("This web page may not work properly on your device, but you can still open it.")
}

window.addEventListener('load', (event) =>{
    resetBackgroundColor();
});

var footer = document.getElementById("footer");

var footerHeight = footer.offsetHeight;

function changeBackgroundColor() {
    var color = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = color;
    document.getElementById("color-picker").style.backgroundColor = complementryHexColor(color);
    document.getElementById("reset").style.backgroundColor = complementryHexColor(color);
    document.getElementById("coords").style.backgroundColor = color;
    var buttons = document.querySelectorAll('.btn1');
    changetextcolor()
    // Loop over the buttons and set the custom property for each one
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.setProperty('--after-bg', complementryHexColor(color));
    }
    // Loop over the buttons and set the custom property for each one
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = complementryHexColor(color);
    }
}

function resetBackgroundColor() {
    color = "#8bd4c3";
    document.body.style.backgroundColor = color;
    document.getElementById("color-picker").value = "#8bd4c3";
    var color = document.getElementById("color-picker").value;
    document.getElementById("color-picker").style.backgroundColor = complementryHexColor(color);
    document.getElementById("reset").style.backgroundColor = complementryHexColor(color);
    document.getElementById("coords").style.backgroundColor = color;
    var buttons = document.querySelectorAll('.btn1');
    changetextcolor()
    // Loop over the buttons and set the custom property for each one
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.setProperty('--after-bg', complementryHexColor(color));
    }
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = complementryHexColor(color);
    }
}

function changetextcolor(){
    const bgColor = document.body.style.backgroundColor
    const rgbColor = bgColor.match(/\d+/g);
    const luminance = 0.2126 * rgbColor[0] + 0.7152 * rgbColor[1] + 0.0722 * rgbColor[2];
    if (luminance >= 128) {
        document.body.style.color = '#000';
        document.getElementById('coords').style.color = '#000';
        document.getElementById('reset').style.color = '#000';
    } else {
        document.body.style.color = '#fff';
        document.getElementById('coords').style.color = '#fff';
        document.getElementById('reset').style.color = '#fff';
    }
}

function complementryHexColor(hex){
    let r = hex.length == 4 ? parseInt(hex[1] + hex[1], 16) : parseInt(hex.slice(1, 3), 16);
    let g = hex.length == 4 ? parseInt(hex[2] + hex[2], 16) : parseInt(hex.slice(3, 5), 16);
    let b = hex.length == 4 ? parseInt(hex[3] + hex[3], 16) : parseInt(hex.slice(5), 16);
  
    [r, g, b] = complementryRGBColor(r, g, b);
    return '#' + (r < 16 ? '0' + r.toString(16) : r.toString(16)) + (g < 16 ? '0' + g.toString(16) : g.toString(16)) + (b < 16 ? '0' + b.toString(16) : b.toString(16));
}

function complementryRGBColor(r, g, b) {
    if (Math.max(r, g, b) == Math.min(r, g, b)) {
        return [255 - r, 255 - g, 255 - b];

    } else {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
    
        h = Math.round((h*60) + 180) % 360;
        h /= 360;
        
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
    
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
    
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);

        return [Math.round(r*255), Math.round(g*255), Math.round(b*255)];
    }
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
    document.getElementById("div6").style.display="none";
}
function to_p2() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="block";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
    document.getElementById("div6").style.display="none";
}
function to_p3() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="block";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
    document.getElementById("div6").style.display="none";
}
function to_p4() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="block";
    document.getElementById("div5").style.display="none";
    document.getElementById("div6").style.display="none";
}
function to_p5() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="block";
    document.getElementById("div6").style.display="none";
}
function to_p6() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";
    document.getElementById("div6").style.display="block";
}