var x = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var g1 = 0;
var g2 = 0;
var g3 = 0;
var g4 = 0;

function addToCart1(){
    x += 99;
    x1 += 99;
    g1 += 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g1').innerHTML = g1;
}
function addToCart2(){
    x += 166;
    x2 += 166;
    g2 += 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g2').innerHTML = g2;
}
function addToCart3(){
    x += 66;
    x3 += 66;
    g3 += 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g3').innerHTML = g3;
}
function addToCart4(){
    x += 133;
    x4 += 133;
    g4 += 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g4').innerHTML = g4;
}

function addToCart5(){
    x += 111;
    x4 += 111;
    g4 += 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g4').innerHTML = g4;
}


function removeFromCart1(){
    if (g1 == 0 ){
    }
    else {
    x -= 99;
    x1 -= 99;
    g1 -= 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g1').innerHTML = g1;
    }
}
function removeFromCart2(){
    if (g2 == 0){
    }
    else {
    x -= 166;
    x2 -= 166;
    g2 -= 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g2').innerHTML = g2;
    }
}
function removeFromCart3(){
    if (g3 == 0){
    }
    else {
    x -= 66;
    x3 -= 66;
    g3 -= 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g3').innerHTML = g3;
    }
}
function removeFromCart4(){
    if (g4 == 0){
    }
    else {
    x -= 133;
    x4 -= 133;
    g4 -= 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g4').innerHTML = g4;
    }
}

function removeFromCart5(){
    if (g4 == 0){
    }
    else {
    x -= 111;
    x4 -= 111;
    g4 -= 1;
    document.getElementById('Price').innerHTML = "$" + x;
    document.getElementById('g4').innerHTML = g4;
    }
}

function update() {
    localStorage.setItem('p', x);
    localStorage.setItem('p1', x1);
    localStorage.setItem('p2', x2);
    localStorage.setItem('p3', x3);
    localStorage.setItem('p4', x4);
    localStorage.setItem('c1', g1);
    localStorage.setItem('c2', g2);
    localStorage.setItem('c3', g3);
    localStorage.setItem('c4', g4);
    localStorage.setItem('c4', g4);
    
}


