let box = document.getElementById("box");
let boxStyle = box.style;
let ballStyle = document.getElementById("ball").style;
let pixelHeight = box.clientHeight;
pixelHeight -= (8+36+4)*4;
let g,e,d;
let velocity = 0, distance = 0;
let requestID = null;

let restart = document.getElementById("restart");
restart.onclick = function(){
    cancelAnimationFrame(requestID);
    ballStyle.transform = `translateY(0px)`;
    velocity = distance = 0;
}

let pause = document.getElementById("pause");
pause.onclick = function(){cancelAnimationFrame(requestID)};

let play= document.getElementById("play");
play.onclick = function(){
    g = parseFloat(document.getElementById("g").value);
    e = parseFloat(document.getElementById("e").value);
    d = parseFloat(document.getElementById("d").value);
    cancelAnimationFrame(requestID);
    requestID = requestAnimationFrame(fall);
}

function fall(){
    if(velocity>=0&&distance>=1) velocity = -e*velocity;
    distance += velocity*0.015 + g*0.015*0.015*0.5;
    ballStyle.transform = `translateY(${ ((distance>1?1:distance)*pixelHeight) }px)`;
    velocity += (g - (d*velocity*Math.abs(velocity)))*0.015;
    requestID = requestAnimationFrame(fall);
}