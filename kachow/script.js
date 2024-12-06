const header = document.querySelector(".head");

const body = document.querySelector(".body");

var RN = Math.floor(Math.random() * 5) + 1;

var RNS = Math.floor(Math.random() * 5) + 1;

var W;
var M;
var A;
var Al;
var P5;

function tstrat() {
    console.log(RN);
    header.textContent = "tstrat";
    body.textContent = "tbodytest";
}

function ctstrat() {
    console.log(RN);
    header.textContent = "Test";
    body.textContent = "anotha test";

    if (1 === RNS) {
        header.textContent = "Strat1";
        body.textContent = "Description1";
    } else {
        header.textContent = "else";
        body.textContent = "elseD";
    }
}