//let computerScore = 0;
var computerScore = 0;
var playerScore = 0;

// get my  elements
// var computerChoiceBox = document.querySelector('#computerChoice');
var computerChoiceBox = document.getElementById("computerChoice");
var playerChoiceBox = document.getElementById("playerChoice");
var resultBox = document.getElementById("result");
var computerScoreText = document.getElementById("computerScore");
var playerScoreText = document.getElementById("playerScore");

var choices = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

// TODO:Computer random choice
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);

  // var randomNumber = Math.ceil(Math.random() * 3);

  // Math.random gives decimal so try Math.floor

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// TODO:Check who wins

// switch(randomNumber) {
//     case 0: return 'rock';
//     case 1: return 'paper';
//     case 2: return 'scissors';
// }

// tried this huge if statement first - too confusing
// if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
// (playerChoice === 'paper' && computerChoice === 'rock') ||
// (playerChoice === 'scissors' && computerChoice === 'paper')) {
//  return 'player';
// }

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player";
  }

  if (playerChoice === "paper" && computerChoice === "rock") {
    return "player";
  }

  if (playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  }

  return "computer";
}

// TODO:Update my scores

function updateScores(winner) {
  if (winner === "player") {
    playerScore = playerScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }

  // TODO:used innerHTML for update

  computerScoreText.innerHTML = computerScore;
  playerScoreText.innerHTML = playerScore;
}

// TODO:Show result message


function showResult(winner) {
  if (winner === "player") {
    resultBox.innerHTML = "PLAYER WINS";
    
  } else if (winner === "computer") {
    resultBox.innerHTML = "COMPUTER WINS";
   
  } else {
    resultBox.innerHTML = "DRAW";
   
  }

  
  resultBox.setAttribute(
    "style",

     // TODO:tried 50% first but 40% looks better
     // TODO:z-index 1000 puts it on top of everything

     // TODO: i used here "style" to see the use of inline execution inside javascript
    //  . i would have otherwise used innerHTML IN function showResult(winner). I DONT WANT THE EASY WAY OUT


    "background-color: yellow; color: black; display: block; position: fixed; top: 40%; left: 0; right: 0; width: 100%; padding: 20px; font-size: 24px; font-weight: bold; z-index: 1000; text-align: center; transform: translateY(-50%);"
  );
  
  
}

// TODO:my game function
function playGame(playerChoice) {

  var computerChoice = getComputerChoice();

  // TODO:Show choices on screen with display flex
  // TODO:having trouble getting my emojis to show up. try again
  playerChoiceBox.innerHTML = choices[playerChoice];
  playerChoiceBox.setAttribute(

    
    "style",
    "display: flex; align-items: center; justify-content: center; font-size: 60px;"
  );

  computerChoiceBox.innerHTML = choices[computerChoice];
  computerChoiceBox.setAttribute(
    "style",
    "display: flex; align-items: center; justify-content: center; font-size: 60px;"
  );
var winner = checkWinner(playerChoice, computerChoice);
updateScores(winner);
showResult(winner);
  
}