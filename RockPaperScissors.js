function getComputerChoice(){
    let computerNumber = Math.random();
    let computerChoice = "";

     if (computerNumber < 0.333){
        computerChoice = "rock";
        console.log("Computer picked rock!");
        return computerChoice;
    }
    else if (computerNumber >= 0.333 && computerNumber < 0.666){
        computerChoice = "paper";
        console.log("Computer picked paper!");
        return computerChoice;
    }
    else if (computerNumber > 0.666){
        computerChoice = "scissors";
        console.log("Computer picked scissors!");
        return computerChoice;
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Play either Rock, Paper or Scisors: ");

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock"){
        console.log("You picked rock!");
        return humanChoice;
    }
    else if (humanChoice == "paper"){
        console.log("You picked paper!");
        return humanChoice;
    }
    else if (humanChoice == "scissors"){
        console.log("You picked scissors!");
        return humanChoice;
    }
    else{
        alert("Invalid entry. Try again");
        getHumanChoice();
    }
    
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
    case "rock":
        if (computerChoice == "rock"){
            console.log("It's a draw!");
        }
        else if (computerChoice == "scissors"){
            console.log("Rock beats scissors! You win this round!");
            return humanScore += 1;
        }
        else if (computerChoice == "paper"){
            console.log("Paper beats rock! You lose this round");   
            return  computerScore += 1;
        }
        break;
    case "scissors":
        if (computerChoice == "rock"){
            console.log("Rock beats scissors! You lose this round!"); 
            return  computerScore += 1;
        }
        else if (computerChoice == "scissors"){
            console.log("It's a draw!");
        }
        else if (computerChoice == "paper"){
            console.log("Scissors beats paper! You win this round!");
            humanScore += 1
            return humanScore += 1;
        }
        break;
    case "paper":
        if (computerChoice == "rock"){
            console.log("Paper beats rock! You win this round");
            return humanScore += 1;
        }
        else if (computerChoice == "scissors"){
            console.log("Scissors beats paper! You lose this round!");
            return  computerScore += 1;
        }
        else if (computerChoice == "paper"){
            console.log("It's a draw!");
        }
        break;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
        getHumanChoice();
    }
}

function scoreState(){
    stringWin = "You won the game! Congrats!";
    stringLose = "You lost! Sorry!";
    stringDraw = "It was a draw! Nobody won!";

    console.log("Your score is "+humanScore+" and computer's score is "+computerScore+".");

    if (humanScore > computerScore){
        console.log(stringWin);
    }
    else if (humanScore < computerScore){
        console.log(stringLose);
    }
    else{
        console.log(stringDraw);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

playGame();
scoreState();



