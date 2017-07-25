var playerChoice = "Paper";

var compChoices = ["Rock", "Paper", "Scissors"];
var compChoice = compChoices[Math.floor(Math.random() * 3)];
//tie
if (compChoice = playerChoice){
console.log("It's a tie");
}
//computer = paper and player = rock
else if (compChoice == "Paper" && playerChoice == "Rock"){
    console.log("You Lose, paper beats rock");
}
//computer = scissors and player= paper
else if (compChoice == "Scissors" && playerChoice == "Paper"){
    console.log("You Lose, scissors beats paper");
}
//computer = rock and player = scissors
else if (compChoice == "Rock" && playerChoice == "Scissors"){
    console.log("You Lose, rock beats scissors");
}
//computer = rock and player = paper
else if (compChoice == "Rock" && playerChoice == "Paper"){
    console.log("You Win, paper beats rock");
}
//computer = paper and player = scissors
else if (compChoice == "Paper" && playerChoice == "Scissors"){
    console.log("You Win, scissors beats paper");
}//computer = scissors and player = rock
else if (compChoice == "Scissors" && playerChoice == "Rock"){
    console.log("You Win, rock beats scissors");
}
