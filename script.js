let box = document.getElementById("box");
let boxStyle = box.style;
let pixelHeight = box.clientHeight;
pixelHeight -= (8+36+4)*4;
console.log(pixelHeight, 'pixelHeight in int');
let count = 0,g,e,d;

let h = 1, interval = 10;
let velocity = 0, distance = 0;

let calculate = document.getElementById("calculate");
calculate.onclick = function(){
    g = parseFloat(document.getElementById("g").value);
    e = parseFloat(document.getElementById("e").value);
    d = parseFloat(document.getElementById("d").value);
    fall();
}

function fall(){
    if(distance<h){
        boxStyle.setProperty('--startheight', ((distance>h?h:distance)*pixelHeight) + 'px');
        distance += velocity*(interval/1000) + g*(interval/1000)*(interval/1000)*0.5;
        velocity += (g - d*velocity*velocity)*interval/1000;
        console.log(distance, velocity, "Fall Distance and velocity")
        boxStyle.setProperty('--endheight', ((distance>h?h:distance) * pixelHeight)+'px');
        setTimeout(fall, interval);
    }
    else{
        velocity = e*velocity;
        count++;
        if(count>100)
        return;
        setTimeout(bounce, 1);
    }
}
function bounce(){
    if(velocity>-0.0000001){
        boxStyle.setProperty('--startheight', ((distance>h?h:distance)*pixelHeight) + 'px');
        distance -= velocity*(interval/1000) - g*(interval/1000)*(interval/1000)*0.5;

        console.log(velocity, "Bounce velocity")
        console.log(g*(interval/1000), "Bounce gravity")
        console.log(velocity - g*(interval/1000), "Bounce change")
        console.log(typeof d, "drag")

        velocity -= (g + (d*velocity*velocity))*(interval/1000);

        console.log(distance, velocity, "Bounce Distance and velocity")
        boxStyle.setProperty('--endheight', ((distance>h?h:distance) * pixelHeight)+'px');
        setTimeout(bounce, interval);
    }
    else{
        count++;
        setTimeout(fall, 1);
    }
}