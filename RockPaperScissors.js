const choices = document.querySelector('.container');

const humanMsg = document.createElement('div');
humanMsg.setAttribute("id", "humanMsg");

const computerMsg = document.createElement('div');
computerMsg.setAttribute("id", "computerMsg");

const roundMsg = document.createElement('div');
roundMsg.setAttribute("id", "roundMsg");

const endMsg = document.createElement('div');
endMsg.setAttribute("id", "endMsg");

const statsMsg = document.createElement('div');
statsMsg.setAttribute("id", "statsMsg");

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
                    
                        humanChoice = 'rock';
                        humanMsg.textContent = "You picked rock!";
                        choices.appendChild(humanMsg);
                        playRound(humanChoice, computerSelection);
                    break;
                case 'paper':
                    
                        humanChoice = 'paper';
                        humanMsg.textContent = "You picked paper!";
                        choices.appendChild(humanMsg);
                        playRound(humanChoice, computerSelection);
                    break;
                case 'scissors':
                    
                        humanChoice = 'scissors';
                        humanMsg.textContent = "You picked scissors!";
                        choices.appendChild(humanMsg);
                        playRound(humanChoice, computerSelection);

                    break;
                default:
                    
            }
            console.log("Human: "+humanScore);
            console.log("Computer: "+computerScore); 
            disableButtons();
    });
}

function disableButtons(){
    if (humanScore >= 5 || computerScore >= 5){
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        scoreState();
    }
}

function scoreState(){
    choices.removeChild(humanMsg);
    choices.removeChild(roundMsg);
    choices.removeChild(computerMsg);
    let stringWin = "You won the game! Congrats!";
    let stringLose = "You lost! Sorry!";
    stringDraw = "It was a draw! Nobody won!";

    statsMsg.textContent = "Your score is "+humanScore+" and computer's score is "+computerScore+".";
    choices.appendChild(statsMsg);


    if (humanScore > computerScore){
        endMsg.textContent = stringWin;
        choices.appendChild(endMsg);
    }
    else if (humanScore < computerScore){
        endMsg.textContent = stringLose;
        choices.appendChild(endMsg);    }
    else{
        endMsg.textContent = stringDraw;
        choices.appendChild(endMsg);    }
}


let humanScore = 0;
let computerScore = 0;

playGame();




