function main() {
  let list = ["Rock", "Paper", "Scissors"];
  let item = list[Math.floor(Math.random() * list.length)];

  function getComputerChoice() {
    return item;
  }
  console.log(item);

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && getComputerChoice() == "Rock") {
      return "draw";
    } else if (playerSelection == "Rock" && getComputerChoice() == "Paper") {
      return "You Win! Rock beats paper!";
    } else if (playerSelection == "Rock" && getComputerChoice() == "Scissors") {
      return "You Win! Rock beats scissors!";
    }
  }

  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

main();
