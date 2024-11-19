console.log('functions');



testConsoleLogInFunction();

somma(5,7)
somma(5,73)
somma(555,7345)

const num1 = 11;
const num2 = 5;

const sommaCalcolata = somma(num1, num2)
console.log(sommaCalcolata);


console.log(creaSaluto('Ciao','Ugo'));

console.log(creaSaluto('Buongiorno','MARTA'));

console.log(getRandomNumber(5,10));
console.log(getRandomNumber(90,100));

if(isPari(num1)){
  console.log('Il numero 1 è pari');
}else{
  console.log('Il numero 1 è dispari');

}

console.log('Il nuemro ' + num1 + ' è ' + pariDispari(num1));


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function isPari(num){
  if(num % 2){
    return false;
  }else{
    return true;
  }
}

function pariDispari(num){
  if(num % 2){
    return 'DISPARI';
  }else{
    return 'PARI';
  }
}

function somma(firstNumber, secondNumber){
  const sommaValori = firstNumber + secondNumber;
  console.log(sommaValori);
  return sommaValori;
}

function creaSaluto (saluto, name){
  console.log('Ciao ' + name);
  return `${saluto} ${name}, tutto bene?`
}

function testConsoleLogInFunction(){
  console.log('Ciao sono una funzione');
}

console.log(capitalize('ciAo'));

const miaFrase = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ea delectus hic maiores fugiat quis similique commodi aspernatur illum quidem, sequi optio aperiam ratione, libero, porro molestias tempora mollitia vitae?';

console.log(capitalizeAllWords(miaFrase));


function capitalizeAllWords(phrase){
  /*
    1. splitto la stringa in una array col divisore SPAZIO
    2. ciclo l'array e ad ogni parola ciclata la modifico con la funzione capitalize()
    3. con join() ricreo la stirnga con separatore SPAZIO e la resituisco
  */

  // 1.
  const arrayString = phrase.split(' ');

  // 2.
  for(let i = 0; i < arrayString.length; i++){
    arrayString[i] = capitalize(arrayString[i]);
  }
  
  // 3.
  return arrayString.join(' ');
}


function capitalize(parola){

  /*
    - trasformo in maiuscolo la prima lettere
    - trasformo in minuscolo le altre lettere
    - restituisco una stringa che concateni i due risultati
  */
  const firstLetter = parola.at(0).toUpperCase();
  const rest = parola.substring(1).toLowerCase()
 
  return firstLetter + rest;
}

console.log(getUserData('ugo', 'de ughi', 30));


function getUserData(firstname, lastname, age){
  const arraUser = [firstname, lastname, age];
  return arraUser
}
