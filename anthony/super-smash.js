var prompt = require('prompt-sync')();

var mashArray = ["Final Destination", "Battlefield", "Mushroom Kingdom", "Omega Stage"];
var firstQuestion = [1, 2];
var secondQuestion = ["Ike", "Mewtwo"];

function rand (num) {
    // returns a random integer between 0 and num 
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}
console.log("You have 2 choices: Ike or Mewtwo")
    var playerAnswer = prompt("Who will you choose to fight as?")
    if (playerAnswer == "Mewtwo"){
    playerAnswer = playerAnswer - 1;
    playerCharChoice.push("You are fighting as Mewtwo");
    console.log("You picked Mewtwo!");
    } else if(answer = "Ike"){
    playerAnswer = playerAnswer - 1;
    playerCharChoice.push("You are fighting as Ike");
    console.log("You picked Ike!");
    }else {
    console.log("I didnt understand your answer. Try again!");
    }
var playerAnswer = 2;
var playerCharChoice = [];
var playerAnswerTwo = 2;
var player

// while(playerAnswer > 1){
//     console.log("You have 2 choices: Ike or Mewtwo")
//     var playerAnswer = prompt("Who will you choose to fight as?")
//     if (playerAnswer == "Mewtwo"){
//     playerAnswer = playerAnswer - 1;
//     playerCharChoice.push("You are fighting as Mewtwo");
//     console.log("You picked Mewtwo!");
//     } else if(answer = "Ike"){
//     playerAnswer = playerAnswer - 1;
//     playerCharChoice.push("You are fighting as Ike");
//     console.log("You picked Ike!");
//     }else {
//     console.log("I didnt understand your answer. Try again!");
//     }
//     console.log("You can attack 1 or 2 times");
//     var answer = prompt("How many times will you strike?");
// }
// while(player)