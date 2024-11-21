
const parola = 'ciao';

if(parola == 'ciao'){
  console.log('la parola è uguale a ciao');
} else {
  // il codice di else viene eseguito solo se non è vera la condizione di if
  console.log('la parola NON è uguale a ciao');
}

console.log(parola == 'ciao');


const utenteMaggiorenne = false;

console.log(utenteMaggiorenne == true);
console.log(utenteMaggiorenne);
console.log(utenteMaggiorenne == false);
// ! = NOT ossia restituisce il conctrario della condizione proposta quindi mi rende true se è false e fasle se è true
console.log(!utenteMaggiorenne);


if(utenteMaggiorenne == true) {
  console.log('può acquistare alcol');
} else {
  console.log('NON può acquistare alcol');
}

if(utenteMaggiorenne) {
  console.log('può acquistare alcol');
} else {
  console.log('NON può acquistare alcol');
}


if(utenteMaggiorenne == false) {
  console.log('NON può acquistare alcol');
} else {
  console.log('può acquistare alcol');
}

if(!utenteMaggiorenne) {
  console.log('NON può acquistare alcol');
} else {
  console.log('può acquistare alcol');
}

const stringa = "1234567890124";

if (stringa.length == 5){
  console.log('La stringa ha 5 caratteri');
  
} else if (stringa.length == 10) {
  // se non è vera la prima condizione
  console.log('la stringa ha 10 caratteri');
  
} else if (stringa == '123456789012'){
  console.log('la stringa corrisponde');
  
} else {
  // se nessuna delle condizioni è vera
  console.log('la stringa è lunga non di 5 nè di 10 caratteri e la stringa non corrisponde');
}


const numero = 10;
const stringaNumero = '10';

if (numero == 10) {
  console.log('Il numero corrisponde');
  
}
// != -> diverso da
if (numero != 9) {
  console.log('Il numero NON corrisponde');
}

if (numero > 9) {
  console.log('Il numeroè maggiore di 9');
}

if (numero < 11) {
  console.log('Il numero è inferiore a 11');
}

if (!(numero > 11)) {
  console.log('Il numero non è vero che è maggiore di 11');
}

if (numero >= 10){
  console.log('il numero è maggiore o uguale a 10');
  
}
if (numero <= 10){
  console.log('il numero è minore o uguale a 10');
}

if (numero == stringaNumero) {
  console.log('i due valori corrispondono perchè il valore è lo stesso');

}
if (numero === stringaNumero) {
  console.log('i due valori corrispondono perchè il valore è lo stesso e anche il tipo');
  
} else {
  console.log('i due valori NON  corrispondono perchè anche se valore è lo stesso il tipo è diverso');
}


const numA = 5;
const numB = 10;
const numC = 15;

if ((numA > 3) && (numB < 11)){
  console.log('numA è maggiore di 3 e numB è minore di 11');

}
if ((numA > 3) && (numC < 15)){
  console.log('numA è maggiore di 3 e numC è min di 15');

}
if ((numA > 3) || (numC < 15)){
  console.log('numA è maggiore di 3 oppure numC è min di 15');
}

