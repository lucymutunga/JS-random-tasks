'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number💃';
document.querySelector('.message').textContent = 13;
document.querySelector('.number').textContent = 26;
document.querySelector('.score').textContent = 50;
document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number🤷‍♂️';
  }
});
