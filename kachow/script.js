function ctstrat() {
    const header = document.querySelector(".head");
    const body = document.querySelector(".body");

    const Ar = 'Arriry';
    const Al = 'Alex';
    const W = 'Marcus';
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

    let RNS = Math.floor(Math.random() * 40);

    console.log(RNS);
    
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
            break;
        case 9:
            header.textContent = "Live on twitch btw";
            body.textContent = "Anyone whos live on twitch has to drop the ttv with Live on twitch btw.";
            break;
        case 10:
            header.textContent = "Hot potato";
            body.textContent = "One gun of your choice. The group must pass around the single gun. You may only take one shot before passing it to someone else.";
            break;
        case 11:
            header.textContent = "Put the fork down fatass.";
            body.textContent = P2 + " is the fatass. They are too busy eating with their dominant hand, so they have to play one handed with their non dominant hand.";
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
        case 29:
            header.textContent = "Narrator: Narrarates all.";
            body.textContent = P2 + " is the narrator. They must Narrate everything they see.";
            break;
        case 30:
            header.textContent = "Guys? What the fuck?";
            body.textContent = "Everyone goes AFK while Alex has to clutch the round.";
            break;
        case 31:
            header.textContent = "Oh shit. Wrong game.";
            body.textContent = "You may only use guns / abilities that are in valorant.";
            break;
        case 32:
            header.textContent = "Zero noise. Stay low.";
            body.textContent = "Make no noise. Silenced Weapons only. Do not get compromsied.";
            break;
        case 33:
            header.textContent = "A different type of stealth.";
            body.textContent = "Leave no survivors. If you fail to do this, reverse reverse for everyone next round.";
            break;
        case 34:
            header.textContent = "Emperor Palpatine";
            body.textContent = "Zeus.";
            break;
        case 35:
            header.textContent = "Peace, and quiet.";
            body.textContent = "Take a break from the stress. No talking, just relax and enjoy the silence :)";
            break;
        case 36:
            header.textContent = "Bouta Slide on the opps fr fr";
            body.textContent = "Travel in a closely packed group of 5. After getting a single kill, rotate away and repeat.";
            break;
        case 37:
            header.textContent = "Ok fatty";
            body.textContent = P1 + "can only talk with food in their mouth";
            break;
        case 38:
            header.textContent = "Boing";
            body.textContent = "Everyone must be jumping while shooting, as if they were a frog.";
            break;
        case 39:
            header.textContent = "6 Pack of beer";
            body.textContent = "Everyone was at a party and drank a 6 pack. You are starting to feel really drunk... turn your keyboard upsidown.";
            break;
        case 40:
            header.textContent = "Aww im sorry to hear about your brother he gets 5 BIG BOOMS ";
            body.textContent = "After every kill, give the enemy 2 BIG BOOMS";
            break;
    }

    if (header.textContent === "Kachowwww") {
        document.body.style.backgroundImage = "url('/public/kachow.png')";
    } else {
        document.body.style.backgroundImage = "";
        document.body.style.backgroundSize = "cover";
    }

    if (header.textContent === "Aww im sorry to hear about your brother he gets 5 BIG BOOMS") {
        document.body.style.backgroundImage = "url('/public/5BIGBOOMS.png')";
    } else {
        document.body.style.backgroundImage = "";
        document.body.style.backgroundImage = "cover";
    }
}
