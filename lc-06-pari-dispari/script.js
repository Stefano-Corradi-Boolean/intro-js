// l'utente inseirsce un numero compreso fra 1 e 10 e decide se giocare "PARI" oppure "DISPARI"
// il computer estrae un numero compreso fra 1 e 10
// il programma stagilisce il vincitore

/*
  1. salvare in due variabili il numero giocato dall'utente e il tipo di giocata
  2. salvare in una variabile un numero random compreso fra 1 e 10
  3. gestire la logica di vincita 
    a. sommare i 2 numero giocati
*/

const numGiocatore = getPromptNumber();

let giocataPlayer = getPromptPariDispari()

const numPC = getRandomNumber(1, 10);

let somma = numPC + numGiocatore;

let risultato = pariDispari(somma);
const rootMessage = `Hai giocato ${giocataPlayer} puntando ${numGiocatore}. 
Il PC ha giocato ${numPC} quindi 
`
let messaggio = 'HAI PERSO!';

// if (somma % 2) risultato = "DISPARI";
if (risultato === giocataPlayer) messaggio = 'HAI VINTO';

console.log(rootMessage + messaggio);



//// FUNCTIONS
function pariDispari(num){
  if(num % 2){
    return 'DISPARI';
  }else{
    return 'PARI';
  }
}
function getPromptPariDispari(){
  let giocataValida = false;
  let giocataPlayer;
  do {
    giocataPlayer = prompt('Gioca PARI o DISPARI');
    if(giocataPlayer.toUpperCase() === 'PARI' || giocataPlayer.toUpperCase() === 'DISPARI'){
      giocataValida = true;
    }
  } while (!giocataValida)

  return giocataPlayer;
}


function getPromptNumber(){
  let isNumerCorrect = false;
  let numGiocatore;
  while(!isNumerCorrect){
    numGiocatore = parseInt(prompt('Inserisci un numero compreso fra 1 e 10'));
    if(!isNaN(numGiocatore) && numGiocatore > 0 && numGiocatore < 11){
      isNumerCorrect = true;
    }
  }
  return numGiocatore
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}






