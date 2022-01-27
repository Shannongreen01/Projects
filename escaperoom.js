var readlineSync = require(`readline-Sync`);
var yourName = readlineSync.question(`Hello whats your name? `);
console.log("......................................................");
console.log("You have won a contest to spend the night in a spooky haunted house. You have been traveling all night and have finally arrived at the door ");
console.log("......................................................");
console.log(`As you approach the door you see a note on the door that says Welcome ${yourName} congratulations your in for a night you will never forget!`);
console.log("......................................................");
console.log("After reading the note you start to feel uneasy and decide it might be best if you forget this and go home");
console.log("......................................................");
const Options = readlineSync.keyIn(` Press 1 to turn around and go home, Press 2 to go through the door `);


if (Options == 1){
console.log("You turn around to go home but realize the taxi that brought you here has already left and you cant get service on your phone. Looks like your spending the night anyway.");

} else if (Options == 2){
console.log(`${yourName} you decide to go through the door`); 
}



let MonsterHasShownUp = false;
let hasFoundTheKey = false;
let madScientist = false;
let completedTheGame = false;

console.log("As you walk in the door slams shut behind you and you hear it lock, You panic and try to open the door but it don't budge.");
console.log("......................................................");
console.log("You look around and think to yourself there must be a key around here somewhere.");
console.log("......................................................");
console.log("While looking around you also notice a hole in the wall");
console.log("......................................................");
console.log("What will you do now?");
console.log("......................................................");

while(MonsterHasShownUp == false && madScientist == false && completedTheGame == false){
const Options2 = readlineSync.keyIn(`Press 1 to Put hand in hole, Press 2 to Find the Key, or Press 3 to open the door: `, {limit: `$<1-3>`});
console.log("......................................................");
console.log()
if (Options2 == 1){
console.log(`${yourName}, As you put your hand in the hole, something grabs your hand and you cannot break free. Behind you a Big Hairy Monster comes and eats you. You are DEAD. Game is over!`);
MonsterHasShownUp = true;}
 else if (Options2 == 2 && hasFoundTheKey == false && madScientist == false && MonsterHasShownUp == false && completedTheGame == false){
console.log(`${yourName}, This must be your lucky day you have found the key inside a dresser!!! What will you do next?`);
 hasFoundTheKey = true;
  } else if (Options2 == 2 && hasFoundTheKey == true && madScientist == false && MonsterHasShownUp == false && completedTheGame == false){
console.log(`${yourName}, While your looking for another key, you fall and hit your head that knocks you unconscious. When you wake up you find yourself tied to a bed and you cant move. Suddenly a man in a white coat wearing gloves comes to you holding knives in his hand. He says I told you this will be a night you wont forget! You are now a science experiment GAME OVER!`);
 madScientist = true; 
} else if (Options2 == 3 && hasFoundTheKey == false && madScientist == false && MonsterHasShownUp == false && completedTheGame == false){
 console.log(`${yourName}, The door is still locked!! You need to find the key! What will you do now`);
} else if (Options2 == 3 && hasFoundTheKey == true && madScientist == false && MonsterHasShownUp == false && completedTheGame == false){
 console.log(`${yourName}, You take the key to the door and you put it in the keyhole, you turn the knob and to your surprise the door opens!!!!.
 You run out the door as fast as you can and don't stop until you get service on your phone to call for help.
 You start to think about the note on the door it was right this is a night you will never forget!! Game Over!`)
 completedTheGame = true;
}
}
console.log("......................................................");
 const Options3 = readlineSync.keyIn("Press 1 if you liked the game, Press 2 if you didnt like the game");

if (Options3 == 1){
    console.log("Thanks you for Playing :)");
} else {console.log("Thank you for your time!")

}
