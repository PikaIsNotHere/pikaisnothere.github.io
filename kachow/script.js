const header = document.querySelector("h1");

const body = document.querySelector("body");

let RN = Math.floor(Math.random() * 5) + 1;

let RNS = Math.floor(Math.random() * 5) + 1;

let W;
let M;
let A;
let Al;
let P5;

function ctstrat() {
    console.log(RN);
    header.textContent = "Test";
    body.textContent = "anotha test";
}

function tstrat() {
    console.log(RN);
    header.textContent = "tstrat";
    body.textContent = "tbodytest";
}
