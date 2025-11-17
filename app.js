const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice()
    return choices[Math.floor(Math.random() * choices.length)];

