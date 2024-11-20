
const isEven = number => number % 2 === 0; 
const getPow = number => number *= number

const myNumber = 10;

// l'operatore ternario lo si usa iin caso di piccoli if/else
//              (condizione)     ? 'viene eseguito se è vera la condizione' : 'viene eseguito se è false la condizione'
const message = isEven(myNumber) ? 'Il numero è pari' : 'Il numero è dispari';
// let message;
// if(isEven(myNumber)){
//   message = 'Il numero  pari'
// }else{
//   message = 'il numero è dispari'
// }

console.log(message);
console.log(myNumber > 0 ? 'il numero è maggiore di 0' : 'il numero non è maggiore di 0');

// elevo alla potenza solo se il numero è maggiore di 0 altrimenti mi serve false
const pow = myNumber > 0 ? getPow(myNumber) : false;

console.log(pow);

