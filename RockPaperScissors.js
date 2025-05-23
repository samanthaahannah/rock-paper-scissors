function getComputerChoice(){
    return Math.random();
}

function getHumanChoice(){
    let choice = prompt("Play either Rock, Paper or Scisors: ");
    return choice;
}

console.log(getComputerChoice());

console.log(getHumanChoice());



