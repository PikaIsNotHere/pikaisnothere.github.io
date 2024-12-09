function ctstrat() {
    const header = document.querySelector(".head");
    const body = document.querySelector(".body");

    const Ar = 'Arriry';
    const Al = 'Alex';
    const W = 'Warkee';
    const M = 'Memphy';
    const B = 'Brendon';
        
    let players = [Ar, Al, W, M, B];

    players.sort(() => Math.random() - 0.5);

    let P1 = players[0];
    let P2 = players[1];
    let P3 = players[2];
    let P4 = players[3];
    let P5 = players[4];

    // console.log(P1);
    // console.log(P2);
    // console.log(P3);
    // console.log(P4);
    // console.log(P5);

    let RNS = Math.floor(Math.random() * 28) + 1;

    switch (RNS) {
        case 1: 
            header.textContent = "Make me a sandwich woman!";
            body.textContent = "All women must stop playing, go to the kitchen, make a sandwich, show it to stream. You may not continue playing until you have showed it to stream.";
            break;
        case 2:
            header.textContent = "Pew Pew Pew";
            body.textContent = "When you shoot, you have to imitate the sound of your gun.";
            break;
        case 3:
            header.textContent = "My code, My rules";
            body.textContent = "Every sentence must end with saying something nice about Pika.";
            break;
        case 4:
            header.textContent = "Ribbit.";
            body.textContent = "Marcus and " + P1 + " can only make frog noises.";
            break;
        case 5:
            header.textContent = "CS2 (Carl strike 2)";
            body.textContent = "Memphy and " + P2 + " all have to talk in the carl weezer voice.";
            break;
        case 6:
            header.textContent = "PICHU, DOWN";
            body.textContent = "Arriry must attempt to stop " + P5 + " from jumping out of the nearest window. If Arriry fails, during the next round Arriry must buy " + P5 + " whatever they want.";
            break;
        case 7:
            header.textContent = "Is that Sam?";
            body.textContent = "All players must crouch jump around and honk at each other.";
            break;
        case 8:
            header.textContent = "Kachowwww";
            body.textContent = "Kachow all sentences must start and end in kachow kachow";
            // css change
            break;
        case 9:
            header.textContent = "Live on twitch btw";
            body.textContent = "Anyone whos live on twitch has to drop the ttv with Live on twitch btw.";
            break;
        case 10:
            header.textContent = "Clover? Is that you?";
            body.textContent = "All words that start with N must be close calls.";
            break;
        case 11:
            header.textContent = "Put the fork down fatass.";
            body.textContent = P2 + " is the fatass. They are too busy eating with their dominant hand, so they have to play one handed with their non dominant hand. Their weight is so large it carries over from irl into in game. They are forced to be crouched as much as possible." + P2 + " is so fat, players can't be within 2 feet otherwise they are stepping on " + P2 + "'s fat.";
            // css change
            break;
        case 12: 
            header.textContent = "Survival of the fittest.";
            body.textContent = P3 + " & " + P4 + "have to 1v1 right there, on the spot.";
            break;
        case 13:
            header.textContent = "Is this a filler episode?";
            body.textContent = "Like uh uhm like the sentences must uhm uh be composed with like around probably 90% filler words I think. (Arriry gets to use meow since it's her only filler word.";
            break;
        case 14:
            header.textContent = "Nutshot.";
            body.textContent = "All players must aim for the nuts, and on kill type 'Nutshot L' to the enemies.";
            break;
        case 15:
            header.textContent = "Put that college english skills to good work!";
            body.textContent = P2 + " has to spend the entire round in spawn typing a paragraph about how their team is about to obliterate the enemies. They have to spend the entire round typing.";
            break;
        case 16:
            header.textContent = "Narrator";
            body.textContent = P4 + " is the narrator. They stick back with their main priority to stay alive. The narrator narrates everything that goes on.";
            break;
        case 17:
            header.textContent = "Heard that? Heard that.";
            body.textContent = "All sentences must end in 'heard that?' and everyone else must reply with 'heard that ‼️‼️' if a player doesnt reply with heard that, all other players must ask them 'did you heard that?' on every sound they hear.";
            break;
        case 18:
            header.textContent = "I dont think dad's coming home with the milk...";
            body.textContent = "Dad, aka " + P5 + " buys a gun of their choice while the others sit in spawn. Dad has to go out, get a kill, and come back alive. Only then can others continue moving. If dad doesnt come back with the milk, well, then you guys cant exactly move. You need the milk to grow big and strong!";
            // css change
            break;
        case 19:
            header.textContent = "Liars Bar 2.0";
            body.textContent = P2 + " sets their crosshair to head level and vertical sensitivity to 0. All other playrs get as close as possible to" + P2 + "and stand around them in a circle formation. " + P2 + " then closes their eyes, and spins around for a random amount of time. When they stop, they spray their gun. ";
            break;
        case 20:
            header.textContent = "200? Full boxed? Pieced?";
            body.textContent = "All players must buy a nova or an xm1014. After you kill someone, state some sort of no life brainrot fortnite quote in all chat.";
            break;
        case 21:
            header.textContent = "Bro Arriry shut up";
            body.textContent = "Everyone needs to talk non stop, only stopping for breaths. Except arriry, she cant talk at all.";
            break;
        case 22:
            header.textContent = "No balls.";
            body.textContent = P1 + " has to roll a crate of their choice mid match, right now.";
            break;
        case 23:
            header.textContent = "Two straight men.";
            body.textContent = "Memphy & Marcus have to hold hands for this round. They must stay by each others side at all times. If one dies, the other must go out as well.";
            break;
        case 24:
            header.textContent = "Mr Brendiscent";
            body.textContent = P5 + " is Mr. President. You must tream them as such.";
            break;
        case 25:
            header.textContent = "5 bullets and a dream.";
            body.textContent = P3 + " & " + P5 + " must spray until they are left with five bullets. After those five, they must throw away their gun. This applies to sidearms as well.";
            break;
        case 26:
            header.textContent = "Careful spongebob.";
            body.textContent = "CAREFUL SPONGEBOB!!!";
            // add css change
            break;
        case 27:
            header.textContent = "Is this the Crusty Crab? Uh no, this is Patrick.";
            body.textContent = "Everyone must talk in SpongeBob quotes.";
            // add css change
            break;
        case 28:
            header.textContent = "Smokey Girl";
            body.textContent = "Everyone must buy a negev, and as many smokes as possible. You must throw them everywhere and spray with the negev.";
            break;
        default: 
            alert("erm, guys! something bad happened...");
            header.textContent = "Ruh Roh. Something bad happened!";
            body.textContent = "Something failed! Please check the console logs for more details!";
    }

    if (header.textContent === "Kachowwww") {
        document.body.style.backgroundImage = "url('/public/kachow.png')";
    } else {
        document.body.style.backgroundImage = "";
    }
}
