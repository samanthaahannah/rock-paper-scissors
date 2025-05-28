const humanMsg = document.createElement('div');
const computerMsg = document.createElement('div');
const roundMsg = document.createElement('div');

let choices = document.querySelector('.container');

function getComputerChoice(){
    let computerNumber = Math.random();
    let computerChoice = "";

     if (computerNumber < 0.333){
        computerChoice = "rock";
        computerMsg.textContent = "Computer picked rock!";
        choices.appendChild(computerMsg);
        return computerChoice;
    }
    else if (computerNumber >= 0.333 && computerNumber < 0.666){
        computerChoice = "paper";
        computerMsg.textContent = "Computer picked paper!";
        choices.appendChild(computerMsg);
        return computerChoice;
    }
    else if (computerNumber > 0.666){
        computerChoice = "scissors";
        computerMsg.textContent = "Computer picked scissors!";
        choices.appendChild(computerMsg);
        return computerChoice;
    }
}


function playRound(humanChoice, computerChoice){
    switch (humanChoice){
    case "rock":
        if (computerChoice == "rock"){
            roundMsg.textContent = "It's a draw!";
            choices.appendChild(roundMsg);
        }
        else if (computerChoice == "scissors"){
            roundMsg.textContent = "Rock beats scissors! You win this round!";
            choices.appendChild(roundMsg);
            return humanScore += 1;
        }
        else if (computerChoice == "paper"){
            roundMsg.textContent = "Paper beats rock! You lose this round";
            choices.appendChild(roundMsg);
            return  computerScore += 1;
        }
        break;
    case "scissors":
        if (computerChoice == "rock"){
            roundMsg.textContent = "Rock beats scissors! You lose this round!";
            choices.appendChild(roundMsg); 
            return  computerScore += 1;
        }
        else if (computerChoice == "scissors"){
            roundMsg.textContent = "It's a draw!";
            choices.appendChild(roundMsg); 
        }
        else if (computerChoice == "paper"){
            roundMsg.textContent = "Scissors beats paper! You win this round!";
            choices.appendChild(roundMsg); 
            return humanScore += 1;
        }
        break;
    case "paper":
        if (computerChoice == "rock"){
            roundMsg.textContent = "Paper beats rock! You win this round";
            choices.appendChild(roundMsg); 
            return humanScore += 1;
        }
        else if (computerChoice == "scissors"){
            roundMsg.textContent = "Scissors beats paper! You lose this round!";
            choices.appendChild(roundMsg); 
            return  computerScore += 1;
        }
        else if (computerChoice == "paper"){
            roundMsg.textContent = "It's a draw!";
            choices.appendChild(roundMsg); 
        }
        break;
    }
}

function playGame(){

    
    choices.addEventListener('click', (event) => {

    let target = event.target;
    let humanChoice = '';
    let computerSelection = getComputerChoice();


    switch(target.id){
        case 'rock':
            humanMsg.textContent = "You picked rock!";
            choices.appendChild(humanMsg);
            humanChoice = 'rock';
            playRound(humanChoice, computerSelection);
            break;
        case 'paper':
            humanMsg.textContent = "You picked paper!";
            choices.appendChild(humanMsg);
            humanChoice = 'paper';
            playRound(humanChoice, computerSelection);
            break;
        case 'scissors':
            humanMsg.textContent = "You picked scissors!";
            choices.appendChild(humanMsg);
            humanChoice = 'scissors';
            playRound(humanChoice, computerSelection);
            break;
        default:
    }
});
    
}

/*function scoreState(){
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
}*/



let humanScore = 0;
let computerScore = 0;

playGame();



