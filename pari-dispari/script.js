// l'utente inseirsce un numero compreso fra 1 e 10 e decide se giocare "PARI" oppure "DISPARI"
// il computer estrae un numero compreso fra 1 e 10
// il programma stagilisce il vincitore

/*
  1. salvare in due variabili il numero giocato dall'utente e il tipo di giocata
  2. salvare in una variabile un numero random compreso fra 1 e 10
  3. gestire la logica di vincita 
    a. sommare i 2 numero giocati
*/

let numGiocatore;

// effettuaiamo il controllo che il valore inserito è un numero e deve essere compreso fra 1 e 10
let isNumerCorrect = false;

while(!isNumerCorrect){
  numGiocatore = parseInt(prompt('Inserisci un numero compreso fra 1 e 10'));
  if(!isNaN(numGiocatore) && numGiocatore > 0 && numGiocatore < 11){
    isNumerCorrect = true;
  }
}

let giocataPlayer;// = prompt('Gioca PARI o DISPARI')
let giocataValida = false;

// stessa logica con sintassi do - while
do {
  giocataPlayer = prompt('Gioca PARI o DISPARI');
  if(giocataPlayer.toUpperCase() === 'PARI' || giocataPlayer.toUpperCase() === 'DISPARI'){
    giocataValida = true;
  }
} while (!giocataValida)

// while(!giocataValida){
//   giocataPlayer = prompt('Gioca PARI o DISPARI');
//   if(giocataPlayer.toUpperCase() === 'PARI' || giocataPlayer.toUpperCase() === 'DISPARI'){
//     giocataValida = true;
//   }
// }

const min = 1;
const max = 10;

const numPC = Math.floor(Math.random() * (max - min + 1) + min);

let somma = numPC + numGiocatore;

console.log('giocataPlayer', giocataPlayer);
console.log('numGiocatore', numGiocatore);
console.log('numPC =', numPC);
console.log('somma', somma);

/// SOLUZIONE 1
// if( !(somma % 2) &&  giocataPlayer == 'PARI'){
  //   console.log('HAI VINTO');
  // } else if ( somma % 2 && giocataPlayer == 'DISPARI' ){
    //   console.log('HAI VINTO');
    // } else {
      //   console.log('HAI PERSO');
      // }
      
/// SOLUZIONE 2
// if( !(somma % 2) &&  giocataPlayer == 'PARI'
//     ||  somma % 2 && giocataPlayer == 'DISPARI'
// ){
//   console.log('HAI VINTO');
// }  else {
//   console.log('HAI PERSO');
// }

/// SOLUZIONE 3
// let risultato;
// if(somma % 2) {
//   risultato = 'DISPARI';
// } else {
//   risultato = 'PARI';
// }

// if (risultato === giocataPlayer){
//   console.log('HAI VINTO');
// }else{
//   console.log('HAI PERSO');
// }

// SOLUZIONE 4
let risultato = 'PARI';
let messaggio = 'HAI PERSO!';

if (somma % 2) risultato = "DISPARI";
if (risultato === giocataPlayer) messaggio = 'HAI VINTO';

console.log(messaggio);



// const numero = 5.4;
// console.log(Math.round(numero)); // arrotonda al valore più vicino
// console.log(Math.floor(numero)); // arrotonda per difetto
// console.log(Math.ceil(numero)); // arrotonda per eccesso

// MODULO %
// modulo divide due numeri e restituisce il resto
// const numA = 10;
// const numB = 5;
// const numC = 3;

// console.log(numA % numB);
// console.log(numA % numC);
// console.log(numB % 2);

// if(numA % 2 === 0){
//   console.log('il numero è pari');
// }
// if( numA % 2 === 0){
//   console.log('il numero è pari');
// }
// if( numB % 2 === 1){
//   console.log('il numero è dispari');
// }
// if(numB % 2){
//   console.log('il numero è dispari');
// }
// if(!(numA % 2)){
//   console.log('il numero è pari');
// }












