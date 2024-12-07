3var RN = Math.floor(Math.random() * 5) + 1;

var W;
var M;
var A;
var Al;
var P5;

function tstrat() {
    const header = document.querySelector(".head");
    const body = document.querySelector(".body");
    console.log(RN);
    header.textContent = "tstrat";
    body.textContent = "tbodytest";
}

function ctstrat() {
    const header = document.querySelector(".head");
    const body = document.querySelector(".body");
    
    let RNS = Math.floor(Math.random() * 5) + 1;

    if (1 === RNS) {
        header.textContent = "Make me a sandwich woman!";
        body.textContent = "All women must stop playing, go to the kitchen, make a sandwich, show it to stream. You may not continue playing until you have showed it to stream.";
    } else if ( 2 === RNS) {
        header.textContent = "else";
        body.textContent = "elseD";
    } else if ( 3 === RNS) { 
        header.textContent = "else3";
        body.textContent = "else3D";
    } else if ( 4 === RNS) {
        header.textContent = "else4";
        body.textContent = "else4D";
    }  else if (5 === RNS) {
        header.textContent = "else5";
        body.textContent = "else5D";
    }
}