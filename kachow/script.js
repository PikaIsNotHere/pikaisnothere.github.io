var RN = Math.floor(Math.random() * 5) + 1;

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
        header.textContent = "Strat1";
        body.textContent = "Description1";
    } else {
        header.textContent = "else";
        body.textContent = "elseD";
    }
}