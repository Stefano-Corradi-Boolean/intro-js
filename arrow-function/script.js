console.log('arrow functions');

// le arrow function devono essere prima dichaiare e poi usate come qualsiasi variabile
// const somma = (numA, numB) => {
//   return numA + numB
// }

// le arrow funtion se scritte senza graffe e su una sola riga hanno il rturn implicito
const somma = (numA, numB) =>  numA + numB;

// const isEven = (number) => {
//   return number % 2 === 0; 
// }

// con un solo parametro posso non mettere le tonde
const isEven = number => number % 2 === 0; 


console.log(somma(5,7));
console.log(isEven(6));





// function somma(numA, numB){
//   return numA + numB
// }


// function isEven(number){
//   return number % 2 === 0;
// }
