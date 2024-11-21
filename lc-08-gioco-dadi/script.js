/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

const playerNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;
let message;

if(playerNumber > pcNumber){
  message = 'Vince il giocatore'
} else if (playerNumber < pcNumber){
  message = 'Vince il PC'
} else {
  message = 'PARI'
}

console.log(message);

console.log(playerNumber, pcNumber);
