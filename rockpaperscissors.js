const getComputerChoice = function() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function getHumanChoice() {
const userChoice = String(window.prompt("Choose either rock, paper, or scissors.", ""));
return userChoice;

}

function playRound(user, cpu) {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (user === cpu) {
    return "Nobody won. You both chose " + user;
  }

  if (rules[user] === cpu) {
    playerScore += 1;
    return "Player won. You chose " + user + " and they chose " + cpu;
  }

  
  computerScore += 1;
  return "Computer won. They chose " + cpu + " and you chose " + user;
}


let playerScore = 0;
let computerScore = 0;

for (i = 1; i <= 5; i++) {
let playersChoice = getHumanChoice();
let compsChoice = getComputerChoice();
alert(playRound(playersChoice, compsChoice) + "");
alert("Current score, Round " + i + "\n PLAYER: " + playerScore + "\n CPU: " + computerScore);
};

alert("Final score\n PLAYER: " + playerScore + "\n CPU: " + computerScore);