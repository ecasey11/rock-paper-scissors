const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Error');
  }
};
console.log(getUserChoice('rock'));

function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0){
    return 'rock';
  }
  else if (choice === 1){
    return 'paper';
  }
  else if (choice === 2){
    return 'scissors';
  }
};
console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'Tie game!';
  }
  else if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won!';
    }
    else {
      return 'User won!';
    }
  }
  else if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'User wins!';
    }
    else {
      return 'Computer wins!';
    }
  }
  else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer wins!';
    }
    else {
      return 'User wins!';
    }
  }
  else if (userChoice === 'bomb'){
    return 'User wins!';
  }
}
console.log(determineWinner('paper', getComputerChoice));

function playGame(){
  let userChoice = getUserChoice('bomb');
  console.log(`User choice: ${userChoice}`);
  
  let computerChoice = getComputerChoice();
  console.log(`Computer choice: ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
