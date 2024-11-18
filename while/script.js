
let c = 0;

while( c < 10 ){
  console.log(c + ' è inferiore a 10');

  // all'interno di un ciclo while se deve sempre metter la logica che prima o poi interroma il ciclo
  c++;
  
}

console.log(c);


const nomi = ['ugo', 'rino', 'pino', 'gino', 'ugo', 'marta', 'ugo', 'rino'];

// dando per scoltanto che ci siano almeno 3 'ugo' il ciclo si interrompe quendo incoltro il terzo
let threeUgoFoud = false;
let i = 0;
let counterUgo = 0;

while(!threeUgoFoud && i < nomi.length){
  if(nomi[i] === 'ugo') counterUgo++;
  i++;
  if(counterUgo >= 3) threeUgoFoud = true;
}
console.log('fine ciclo, counterUgo = ' +counterUgo);
if(threeUgoFoud) console.log('Ci sono tre ugo');
else console.log('NON ci sono tre ugo');


// crea un array di 10 numeri random univoci compresi fra 1 e 15
/*
1. creo un array vuoto
2. ciclo fino a quando la lunghezza  dell'array di numeri random è == 10
3. ad ogni ciclo controllo se il numero esiste
    - SE ESISTE -> ne genero un'altro
    - ALTRIMENTI lo pusho nell'array

*/

const randomNumbers = [];
while(randomNumbers.length < 10){
  const randomNumber = Math.ceil(Math.random() * 15);
  if(!randomNumbers.includes(randomNumber)){
    randomNumbers.push(randomNumber)
  }
}

console.log(randomNumbers);

