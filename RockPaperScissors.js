const choices = document.querySelector('.container');

const humanMsg = document.createElement('div');
humanMsg.setAttribute("id", "humanMsg");
choices.appendChild(humanMsg);


const computerMsg = document.createElement('div');
computerMsg.setAttribute("id", "computerMsg");
choices.appendChild(computerMsg);
document.getElementById('computerMsg').disabled = true;



const roundMsg = document.createElement('div');
roundMsg.setAttribute("id", "roundMsg");
choices.appendChild(roundMsg);


const endMsg = document.createElement('div');
endMsg.setAttribute("id", "endMsg");
choices.appendChild(endMsg);


const statsMsg = document.createElement('div');
statsMsg.setAttribute("id", "statsMsg");
choices.appendChild(statsMsg);


function getComputerChoice(){
    let computerNumber = Math.random();
    let computerChoice = "";

     if (computerNumber < 0.333){
        computerChoice = "rock";
        computerMsg.textContent = "Computer picked rock!";
        return computerChoice;
    }
    else if (computerNumber >= 0.333 && computerNumber < 0.666){
        computerChoice = "paper";
        computerMsg.textContent = "Computer picked paper!";
        return computerChoice;
    }
    else if (computerNumber > 0.666){
        computerChoice = "scissors";
        computerMsg.textContent = "Computer picked scissors!";
        return computerChoice;
    }
}


function playRound(humanChoice, computerChoice){
    switch (humanChoice){
    case "rock":
        if (computerChoice == "rock"){
            roundMsg.textContent = "It's a draw!";
        }
        else if (computerChoice == "scissors"){
            roundMsg.textContent = "Rock beats scissors! You win this round!";
            return humanScore += 1;
        }
        else if (computerChoice == "paper"){
            roundMsg.textContent = "Paper beats rock! You lose this round";
            return  computerScore += 1;
        }
        break;
    case "scissors":
        if (computerChoice == "rock"){
            roundMsg.textContent = "Rock beats scissors! You lose this round!";
            return  computerScore += 1;
        }
        else if (computerChoice == "scissors"){
            roundMsg.textContent = "It's a draw!";
        }
        else if (computerChoice == "paper"){
            roundMsg.textContent = "Scissors beats paper! You win this round!";
            return humanScore += 1;
        }
        break;
    case "paper":
        if (computerChoice == "rock"){
            roundMsg.textContent = "Paper beats rock! You win this round";
            return humanScore += 1;
        }
        else if (computerChoice == "scissors"){
            roundMsg.textContent = "Scissors beats paper! You lose this round!";
            return  computerScore += 1;
        }
        else if (computerChoice == "paper"){
            roundMsg.textContent = "It's a draw!";
        }
        break;
    }

}

function playGame(){
        choices.addEventListener('click', (event) => {  
            let target = event.target;
            let humanChoice = '';
            let computerSelection = "";

            switch(target.id){
                case 'rock':
                        computerSelection = getComputerChoice();
                        humanChoice = 'rock';
                        humanMsg.textContent = "You picked rock!";
                        playRound(humanChoice, computerSelection);
                    break;
                case 'paper':
                        computerSelection = getComputerChoice();
                        humanChoice = 'paper';
                        humanMsg.textContent = "You picked paper!";
                        playRound(humanChoice, computerSelection);
                    break;
                case 'scissors':
                        computerSelection = getComputerChoice();
                        humanChoice = 'scissors';
                        humanMsg.textContent = "You picked scissors!";
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
    humanMsg.textContent = "";
    roundMsg.textContent = ""
    computerMsg.textContent = ""

    let stringWin = "You won the game! Congrats!";
    let stringLose = "You lost! Sorry!";
    stringDraw = "It was a draw! Nobody won!";

    statsMsg.textContent = "Your score is "+humanScore+" and computer's score is "+computerScore+".";


    if (humanScore > computerScore){
        endMsg.textContent = stringWin;
    }else if (humanScore < computerScore){
        endMsg.textContent = stringLose;
    }else{
        endMsg.textContent = stringDraw;
    }
}


let humanScore = 0;
let computerScore = 0;

playGame();




