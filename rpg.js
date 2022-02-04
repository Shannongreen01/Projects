var readlineSync = require('readline-sync');

let youAccept = false;

while (youAccept == false){
readlineSync.keyInPause(`........ You start waiking up, once you start to understand
your in a place you dont reconize, you slowly start hearing a voice....`);
console.log();
readlineSync.keyInPause(` The voice says...Hello, take your time and dont worry your with friends`);
console.log();
readlineSync.keyInPause(`Your fully awake now and sitting up on the side of the bed
you woke up in, as you look up you see an old man in some strange looking clothes looking at you.
He says I'm releived you made it through the transition in one peace.`);
console.log();
const user = readlineSync.question(`What is your name our savior? He asks...You slowly answer with  (Enter your Name here) `);
console.log();
readlineSync.keyInPause(` Hello ${user} I will get straight to the point, You have been brought here by our Mage
who has great power, you were brought here becouse you are our best hope in defeating an aweful monster
who has taken control of our great land, This monster's name is Anger.`);
console.log();
var Options = readlineSync.question(` Will you help us defete Anger and bring peace back to your land? Enter 1 for yes or 2 for no    `);
console.log();

if (Options == 1){
console.log(` Oh thank you our savior you have just gave hope to a whole land who have had very little
for so very long!! Please go with my generial he will tell 
you all you need to know and you will be on your way`);
console.log();
}else{
console.log();
console.log(` Im sorry to hear that but you must understand it you dont help us we will not send you
back to your world! You decide its best to help so you say yes.`);
console.log();
console.log(` Oh thank you our savior you have just gave hope to a whole land who have had very little
for so very long!! Please go with my generial he will tell you all you need 
to know and you will be on your way`);
console.log();
youAccept == true;
console.log (`You go with the general and he fills you in on everything 
now you are on your way in search for Anger's Castle`);
}

console.log();

let isAlive = true;
let inv = [];
let userHP = 50;
let beatAnger = false;
let userMP = 50;

let playerControls = () => {
let walk = readlineSync.keyIn(`Press w to walk forward:  `);

 if (walk == "w"){
 walkRandom();
} 
}
 
let walkRandom = () => {
let x = Math.random();

 if (x < 0.3){
 spawnEnemy();
  
}
}

let spawnEnemy = () => {
let x = Math.random();

 if (x < 0.2){
 anger();
    }else if (x < 0.5){
     bat();
    }else if (x > 0.2){
     bat();
} 
}

let bat = () => {
console.log(`A bat has appeared!`)
console.log();
let x = 10;

while (isAlive == true){
let batAtk = Math.floor(Math.random() * 5 + 1);
let pAtk = Math.floor(Math.random() * 15 + 1);

 if (userHP <= 0){
 console.log(`${user} HAS DIED, GAME OVER!`);
 isAlive = false;
 console.log();

    }else if (x <= 0){
     console.log(`You have defeated the bat and have been awarded a spoon!`);
     f = `spoon`;
     inv.push(f);
     playerControls()
     console.log();

    }else if (userHP != 0 && x != 0){
     let choice = readlineSync.keyIn(`Press 1 to attack \nPress 2 to run \nPress p to view stats \nPress m to use Magic`);
     console.log();

 if (choice == 1){
    let attackChance = Math.random();
    console.log();

    if (attackChance > 0.5){
        x -= pAtk;
        console.log(`Bat took ${pAtk} damage! HP is now: ` + x);
        userHP -= batAtk;
        console.log(`${user} took ${batAtk} damage! HP is now: ` + userHP);
        console.log();

    }else{
        console.log(`You tried to attack but missed!! ${choice}  `);
        userHP -= batAtk;
        console.log(`${user} took ${batAtk} damage! HP is now: ` + userHP);
        console.log();
}

    }else if (choice == "m"){
     let Magic = readlineSync.keyIn(` Press 1 for Fireball, Press 2 for Healing Wind, Press 3 for Ice Ball`);
     console.log();

 if (Magic == 1){
 x -= pAtk;
 userMP -= 10;
 console.log(`You casted a Fireball and the bat took ${pAtk} damage! HP is now: ` + x);
 userHP -= batAtk;
 console.log(`${user} took ${batAtk} damage! HP is now: ` + userHP);
 console.log();

    }else if (Magic == 2){
     userHP += 25;
     userMP -= 10;
     console.log(` You casted Healing Wing and have gaind 25 of you HP back  `);
     console.log();

    }else if (Magic == 3){
     x -= pAtk;
     userMP -= 10;
     console.log(`You casted a Iceball and the bat took ${pAtk} damage! HP is now: ` + x);   
     userHP -= batAtk;
     console.log(`${user} took ${batAtk} damage! HP is now: ` + userHP);
     console.log();

}else if (userMP >= 0){
    console.log(`You have ran out of MP you cannot use magic anymore!!`)
    console.log();
}
            
    }else if (choice == 2){
     let runChance = Math.random();
     console.log();

 if (runChance > 0.5){
 console.log(`You got away safely.`);
 playerControls();
 console.log();
 break;
}
    }else{
    console.log(`You turn to run but you could not get away!`);
    console.log();
}
    }else if (choice == `p`){
     console.log(`${user}: HP:${userHP} \nInventory: ${inv}`);
     console.log();

    }else {console.log(`Please choose again`)}
    console.log();
}
}

let angryBat = () => {
console.log(`A really angry looking bat appeared!!`)
let x = 10;
console.log();

while (isAlive == true){
let angryBatAtk = Math.floor(Math.random() * 10 + 1);
let pAtk = Math.floor(Math.random() * 15 + 1);

 if (userHP <= 0){
 console.log(`${user} HAS DIED, GAME OVER!`);
 isAlive = false;
 console.log();

    }else if (x <= 0){
     console.log(`You have defeated the angry bat and have been awarded a comb.`);
     playerControls()
     console.log();
     break;

    }else if (userHP != 0 && x != 0){
     let choice = readlineSync.keyIn(`Press 1 to attack \nPress 2 to run \nPress p to view stats \nPress m to use Magic`);
     console.log();

     if (choice == 1){
        let attackChance = Math.random();
        console.log();

        if (attackChance > 0.5){
            x -= pAtk;
            console.log(`Angry Bat took ${pAtk} damage! HP is now: ` + x);
            userHP -= angryBatAtk;
            console.log(`${user} took ${angryBatAtk} damage! HP is now: ` + userHP);
            console.log();
    
        }else{
            console.log(`You tried to attack but missed!! ${choice}  `);
            userHP -= batAtk;
            console.log(`${user} took ${angryBatAtk} damage! HP is now: ` + userHP);
            console.log();
        }

    }else if (choice == "m"){
     let Magic = readlineSync.keyIn(` Press 1 for Fireball, Press 2 for Healing Wind, Press 3 for Ice Ball`);
     console.log();

 if (Magic == 1){
 x -= pAtk;
 userMP -= 10;
 console.log(`You casted a Fireball and the angrybat took ${pAtk} damage! HP is now: ` + x);
 userHP -= angryBatAtk;
 console.log(`${user} took ${angryBatAtk} damage! HP is now: ` + userHP);
 console.log();

    }else if (Magic == 2){
     userHP += 25;
     userMP -= 10;
     console.log(` You casted Healing Wing and have gaind 25 of you HP back  `);
     console.log();

    }else if (Magic == 3){
     x -= pAtk;
     userMP -= 10;
     console.log(`You casted a Iceball and the angrybat took ${pAtk} damage! HP is now: ` + x);   
     userHP -= angryBatAtk;
     console.log(`${user} took ${angryBatAtk} damage! HP is now: ` + userHP);
     console.log();

}else if (userMP >= 0){
    console.log(`You have ran out of MP you cannot use magic anymore!!`)
    console.log();
}
    }else if (choice == 2){
     let runChance = Math.random();
     console.log();

 if (runChance > 0.5){
 console.log(`You got away safely.`);
 playerControls()
 console.log();
 break;

    }else{
    console.log(`You tried to run but could not get away`);
    console.log();
}

    }else if (choice == `p`){
    console.log(`${user}: HP:${userHP} \nInventory: ${inv} \nMP ${userMP}`);
    console.log();
}

    }else {console.log(`Please try again`)}
    console.log();
}
}

let anger = () => {
console.log("After traveling many miles and fighting many enemies you finaly find Anger's Castle   ");
console.log(`Once you enter the door of the castle you get transported to a room and right in front of you is Anger himself! He says no need to wait lets start your end now!`)
let x = 90;
console.log();

while (isAlive == true){
let angerAtk = Math.floor(Math.random() * 5 + 1);
let pAtk = Math.floor(Math.random() * 15 + 1);

 if (userHP <= 0){
 console.log(`${user} HAS DIED, GAME OVER!`);
 console.log();
 isAlive = false;

    }else if (x <= 0){
    console.log(`You have defeated Anger!`); 
    beatAnger = true;
    isAlive = true;
    console.log();
    break;

    }else if (userHP != 0 && x != 0){
     let choice = readlineSync.keyIn(`Press 1 to attack \nPress p to view stats \nPress m to use Magic`);
     console.log();

 if (choice == 1){
    let attackChance = Math.random();
    console.log();

    if (attackChance > 0.5){
        x -= pAtk;
        console.log(`Anger took ${pAtk} damage! HP is now: ` + x);
        userHP -= angerAtk;
        console.log(`${user} took ${angerAtk} damage! HP is now: ` + userHP);
        console.log();

    }else{
    console.log(`You tried to attack but missed!! ${choice}  `);
    userHP -= batAtk;
    console.log(`${user} took ${angerAtk} damage! HP is now: ` + userHP);
    console.log();
    }
    
    }else if (choice == "m"){
     let Magic = readlineSync.keyIn(` Press 1 for Fireball, Press 2 for Healing Wind, Press 3 for Ice Ball`);
     console.log();

 if (Magic == 1){
 x -= pAtk;
 userMP -= 10;
 console.log(`You casted a Fireball and Anger took ${pAtk} damage! HP is now: ` + x);
 userHP -= angerAtk;
 console.log(`${user} took ${angerAtk} damage! HP is now: ` + userHP);
 console.log();

    }else if (Magic == 2){
    userHP += 25;
    userMP -= 10;
    console.log(` You casted Healing Wing and have gaind 25 of you HP back  `);
    console.log();

    }else if (Magic == 3){
     x -= pAtk;
     userMP -= 10;
     console.log(`You casted a Iceball and the Anger took ${pAtk} damage! HP is now: ` + x);
     userHP -= angerAtk;
     console.log(`${user} took ${angerAtk} damage! HP is now: ` + userHP);
     console.log();

    }else if (userMP >= 0){
        console.log(`You have ran out of MP you cannot use magic anymore!!`)
        console.log();
    }

    }else if (choice == `p`){
    console.log(`${user}: HP:${userHP} \nInventory: ${inv} \nMP ${userMP}`);
    console.log();
          
    }else {console.log(`Please try again`)}
    console.log();
}
}
}
while (isAlive == true && beatAnger == false){
      playerControls();
      console.log();

 if (isAlive == true && beatAnger == true){
     console.log("You have beat Anger!!!!")
     readlineSync.keyInPause(`As you start to celebrate you win you start to feel funny and everything
     starts to get blury. The next thing you know you are back in a room with the old man like you was
     when this all started but somethings different.....This time your in a hospital bed and the old man is
     wearing a dr's outfit. He says well we are glad to see you are awake! You hit your head in an acident
     and have been in a coma for a year!`);
     readlineSync.keyInPause(`It was all a dream and you think god your ok and that maby you shouldnt play
     role playing games as much from now on!`);
     
}
}
}
