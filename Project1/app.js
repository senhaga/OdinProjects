"use strict";
const plays = ["pedra", "papel", "tesoura"];
const promptingMessage = "Pedra Papel ou Tesoura?";
const victoryMessage = "Ganhou!";
const lossMessage = "Perdeu!";
let userPlay = prompt(promptingMessage).toLowerCase();
console.log(userPlay);
makeMatch(userPlay);

function makeMatch(userPlay) {
  let enemyPlay = getEnemyPlay();
  if (enemyPlay == userPlay) {
    alert("Empatou!");
  } else if (enemyPlay == "tesoura") {
    userPlay == "pedra" ? alert(victoryMessage) : alert(lossMessage);
  } else if (enemyPlay == "pedra") {
    userPlay == "papel" ? alert(victoryMessage) : alert(lossMessage);
  } else if (enemyPlay == "papel") {
    userPlay == "tesoura" ? alert(victoryMessage) : alert(lossMessage);
  }
}

function getEnemyPlay() {
  let result = Math.floor(Math.random() * 3);
  console.log(result);
  console.log(plays[result]);
  return plays[result];
}
