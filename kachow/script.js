var RN = Math.floor(Math.random() * 5) + 1;

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
    
    let players = [Ar, Al, W, M, B];
    
    let P1 = players[0];
    let P2 = players[1];
    let P3 = players[2];
    let P4 = players[3];
    let P5 = players[4];
    
    console.log(P1);
    console.log(P2);
    console.log(P3);
    console.log(P4);
    console.log(P5);
    
    let RNS = Math.floor(Math.random() * 6) + 1;

    if (1 === RNS) {
        header.textContent = "Make me a sandwich woman!";
        body.textContent = "All women must stop playing, go to the kitchen, make a sandwich, show it to stream. You may not continue playing until you have showed it to stream.";
    } else if ( 2 === RNS) {
        header.textContent = "37%";
        body.textContent = "All callouts must be in spanish, with an american accent.";
    } else if ( 3 === RNS) { 
        header.textContent = "Ribbit.";
        body.textContent = "Marcus and ${P4} can only make frog noises.";
    } else if ( 4 === RNS) {
        header.textContent = "CS2 (Carl strike 2)";
        body.textContent = "Memphy and ${P2}, all have to talk in the carl weezer voice.";
    }  else if (5 === RNS) {
        header.textContent = "PICHU, DOWN";
        body.textContent = "Arriry must attempt to stop ${P5} from jumping out of the nearest window. If Arriry fails, during the next round Arriry must buy ${P5} whatever they want.";
    } else if (6 === RNS) {
        header.textContent = "Is that Sam?";
        body.textContent = "All players must crouch jump around and honk at each other."
    } else if (7 === RNS) {
        header.textContent = "";
    	body.textContent = "";
    } else {
        alert("erm, guys! something bad happened...");
        header.textContent = "Ruh Roh. Something bad happened!";
        body.textContent = "Something failed! Please check the console logs for more details!";
    }
}






