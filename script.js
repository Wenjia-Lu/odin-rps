
let humanScore = 0,
    botScore = 0,
    round = 0;


let humanSelectionDiv = document.querySelector(".human_selection");

humanSelectionDiv.addEventListener("click", (e) => {
    let c = e.target.id;

    switch(c){
        case 'r':
            playRound('rock');
            break;
        case 'p':
            playRound('paper');
            break;
        case 's':
            playRound('scissor');
            break;
    }
})

let statusText = document.querySelector("#status");
let humanStatusText = document.querySelector("#human_status");
let botStatusText = document.querySelector("#bot_status");
let arrow = document.querySelector("#is_human_selecting");
let humanTally = document.querySelector("#human_add");
let botTally = document.querySelector("#bot_add");
let exp = document.querySelector(".exp");


// 0 (tie), 1 (u won), 2 (bot won)
function updateStatus(n, human, bot, r){
    botStatusText.innerText = `Bot picked ${bot}.`;
    humanStatusText.innerText = `You picked ${human}`;
    arrow.innerText = "";

    switch(n){
        case 0:
            statusText.innerText = "TIE";
            break;
        
        case 1:
            statusText.innerText = 'WON';
            exp.innerText =  `${human} beats ${bot}`;
            humanTally.innerText = "+1";
            break;

        case 2:
            statusText.innerText = 'LOST';
            exp.innerText = `${bot} beats ${human}`;
            botTally.innerText = "+1";
            break;
    }
    
    setTimeout(() => {
        if (r == round){
            humanTally.innerText = "";
            botTally.innerText = "";
            exp.innerText = "";
        }
      }, 1000)

    setTimeout(() => {
        if (r == round){
            botStatusText.innerText = `bot is waiting...`;
            statusText.innerText = `?`;
            humanStatusText.innerText = 'Make your selection...';
            arrow.innerText = ">";
        }
      }, 2500)
}

function getbotChoice(){
    let arr = ['rock', 'paper', 'scissor'];
    return arr[Math.floor((Math.random() * 3))];
}

// function getHumanChoice(){
//     return prompt("Make your pick: 'rock', 'paper', or 'scissor'?");
// }

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

let desc = document.querySelector('#desc');

function checkEnd(){
    if (humanScore >= 5 || botScore >= 5){
        (humanScore > botScore) ? console.log("You Won :)") : console.log("bot Won :(");
        (humanScore > botScore) ? desc.innerText = "You Won :)" : desc.innerText = "bot Won :(";
    }
}

let score_human = document.querySelector(".score_board #human");
let score_bot = document.querySelector(".score_board #bot");

function updateHumanScore(){
    humanScore++;
    score_human.innerText = humanScore;
}

function updateBotScore(){
    botScore++;
    score_bot.innerText = botScore;
}

function playRound(human){
    round++;
    let h = human.charAt(0);
    let bot = getbotChoice();
    let c = bot.charAt(0);

    if (h == c) {
        console.log("It's a tie.");
        updateStatus(0, human, bot, round);
    } 
    else if (checkWin(h, c)) {
        console.log(`Human won :) ${human} beats ${bot}`);
        updateStatus(1, human, bot, round);
        updateHumanScore();
    } 
    else {
        console.log(`bot won :( ${bot} beats ${human}`);
        updateStatus(2, human, bot, round);
        updateBotScore();
    }

    checkEnd();
}

// function playGame(human){
//     playRound(human);

//     // console.log("Game Over.");

//     (humanScore > botScore) ? console.log("You Won!") : console.log("bot Won :(");
// }

// playGame();

