
/*function getComputerChoice(){
    let computerNumber = Math.random();
    let computerChoice = "";

     if (computerNumber < 0.333){
        computerChoice = "rock";
        alert("Computer picked rock!");
        return computerChoice;
    }
    else if (computerNumber >= 0.333 && computerNumber < 0.666){
        computerChoice = "paper";
        alert("Computer picked paper!");
        return computerChoice;
    }
    else if (computerNumber > 0.666){
        computerChoice = "scissors";
        alert("Computer picked scissors!");
        return computerChoice;
    }
}*/

const msg = document.createElement('div');

let humanChoices = document.querySelector('.container');

humanChoices.addEventListener('click', (event) => {

    let target = event.target;

    switch(target.id){
        case 'rock':
            msg.textContent = "You picked rock!";
            humanChoices.appendChild(msg);
            break;
        case 'paper':
            msg.textContent = "You picked paper!";
            humanChoices.appendChild(msg);
            break;
        case 'scissors':
            msg.textContent = "You picked scissors!";
            humanChoices.appendChild(msg);
            break;
        default:
    }
});



/*function getHumanChoice(){
    let humanChoice = prompt("Play either Rock, Paper or Scisors: ");

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock"){
        alert("You picked rock!");
        return humanChoice;
    }
    else if (humanChoice == "paper"){
        alert("You picked paper!");
        return humanChoice;
    }
    else if (humanChoice == "scissors"){
        alert("You picked scissors!");
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
            alert("It's a draw!");
        }
        else if (computerChoice == "scissors"){
            alert("Rock beats scissors! You win this round!");
            return humanScore += 1;
        }
        else if (computerChoice == "paper"){
            alert("Paper beats rock! You lose this round");   
            return  computerScore += 1;
        }
        break;
    case "scissors":
        if (computerChoice == "rock"){
            alert("Rock beats scissors! You lose this round!"); 
            return  computerScore += 1;
        }
        else if (computerChoice == "scissors"){
            alert("It's a draw!");
        }
        else if (computerChoice == "paper"){
            alert("Scissors beats paper! You win this round!");
            return humanScore += 1;
        }
        break;
    case "paper":
        if (computerChoice == "rock"){
            alert("Paper beats rock! You win this round");
            return humanScore += 1;
        }
        else if (computerChoice == "scissors"){
            alert("Scissors beats paper! You lose this round!");
            return  computerScore += 1;
        }
        else if (computerChoice == "paper"){
            alert("It's a draw!");
        }
        break;
    }
}

function playGame(){
    
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    
}

function scoreState(){
    stringWin = "You won the game! Congrats!";
    stringLose = "You lost! Sorry!";
    stringDraw = "It was a draw! Nobody won!";

    alert("Your score is "+humanScore+" and computer's score is "+computerScore+".");

    if (humanScore > computerScore){
        alert(stringWin);
    }
    else if (humanScore < computerScore){
        alert(stringLose);
    }
    else{
        alert(stringDraw);
    }
}



let humanScore = 0;
let computerScore = 0;

playGame();
scoreState();*/



