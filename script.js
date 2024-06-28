'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number selected');
  }
  //When the player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = score;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
  }
  //When guess is different from secretNumber
  else if (guess !== secretNumber) {
    //when the guess is greater than one
    if (score > 1) {
      //when the guess is too low or too high
      displayMessage(
        guess > secretNumber ? 'Number Too High!' : 'Number too low',
      );
    } else {
      //when you lost the game
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
