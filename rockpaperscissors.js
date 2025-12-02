const getComputerChoice = function() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function playRound(user, cpu) {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (user === cpu) {
    return "Nobody won. You both chose " + user + ". Round will restart.";
  }

  if (rules[user] === cpu) {
    playerScore += 1;
    return "Player won. You chose " + user + " and they chose " + cpu;
  }

  computerScore += 1;
  return "Computer won. They chose " + cpu + " and you chose " + user;
}

function checkWinner() {
  if (playerScore > computerScore) {
    document.querySelector(".playerscore").style.fontWeight = "bold";
    return "You won!";
  }

  if (computerScore > playerScore) {
    document.querySelector(".cpuscore").style.fontWeight = "bold";
    return "You lost!";
  }

  return "It's a tie!";
}



let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {

    if (roundsPlayed >= 5) {
      document.getElementById("result").textContent = checkWinner();
      return;
    }

    const userChoice = button.textContent.toLowerCase();
    const cpuChoice = getComputerChoice();
    const result = playRound(userChoice, cpuChoice);

    if (!result.startsWith("Nobody won")) {
      roundsPlayed += 1;
    }

    if (roundsPlayed >= 5) {
      document.getElementById("result").textContent = checkWinner();
    } else {
      document.getElementById("result").textContent = result;
    }

    document.querySelector(".playerscore").textContent =
      "Player score: " + playerScore;
    document.querySelector(".cpuscore").textContent =
      "CPU score: " + computerScore;
    document.querySelector(".roundsplayed").textContent =
      "Rounds played: " + roundsPlayed;
  });
});
