let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess,computerGuess,generateTarget) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Please pick a number between 0 and 9.')
  }
  Math.abs(userGuess)
  Math.abs(computerGuess)
  return generateTarget
  if (userGuess === generateTarget) {
    return true
  } else if (computerGuess === generateTarget) {
    return false
  } else if (userGuess - generateTarget < computerGuess - generateTarget) {
    return true
  } else if (userGuess - generateTarget > computerGuess - generateTarget) {
    return false
  } else {
    return true
  }
}

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
    humanScore = humanScore + 1
    case 'computer':
    computerScore = computerScore + 1
    default:
    return 'Who won'
  }
}

const advanceRound = () => {
 currentRoundNumber=currentRoundNumber + 1
}