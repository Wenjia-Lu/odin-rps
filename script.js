console.log("hello world")

let humanScore = 0,
    computerScore = 0;

function getComputerChoice(){
    let arr = ['rock', 'paper', 'scissor'];
    return arr[Math.floor((Math.random() * 3))];
}

function getHumanChoice(){
    return prompt("Make your pick: 'rock', 'paper', or 'scissor'?");
}

function checkWin(h, c){ // return true if human won
    switch(h){
        case 'r':
            return c == 's';
        case 'p':
            return c == 'r';
        case 's':
            return c == 'p';
    }
}

function playRound(human, computer){
    let h = human.trim().charAt(0).toLowerCase();
    let c = computer.charAt(0);
    if (h == c) {
        console.log("It's a tie.");
    } else if (checkWin(h, c)) {
        console.log(`Human won! ${human} beats ${computer}`);
        humanScore++;
    } 
    else {
        console.log(`Computer won! ${computer} beats ${human}`);
        computerScore++;
    }
}

function playGame(){
    // for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    // }

    console.log("Game Over.");

    (humanScore > computerScore) ? console.log("Human Won.") : console.log("Computer Won.");
}

playGame();

