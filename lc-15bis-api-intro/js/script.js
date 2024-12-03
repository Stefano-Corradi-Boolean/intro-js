console.log('axios');

/*
Il programma effettua due chiamate API allo stesso enpoint salvando dume numeri differenti
Genera poi un output definendo quale numero è maggiore o se sono uguali
*/


let numA, numB;
const numbers = [];
const enpoint = 'https://flynn.boolean.careers/exercises/api/random/int';

printMessage('Loading...')

getApi()
getApi()


function getApi(){
  axios.get(enpoint)
  .then(response => {
    if(response.data.success){
      // fine loading
      console.log(response.data);
      const number = response.data.response;
      numbers.push(number)
      if(checkNumbers()){
        endGame()
      }
    }
  })
  .catch(err => {
    // fine loading
    console.log(err);
    printMessage('Errore! ' + err.message)
  })
}

function endGame(){
  [numA, numB] = numbers;
  console.log(numA, numB);
  let message = `Numero A: ${numA}, numero B: ${numB} - i numeri sono uguali`;
  if(numA > numB ) message = `Numero A: ${numA}, numero B: ${numB} - Numero A è maggiore di Numero B`;
  else if(numB > numA) message = `Numero A: ${numA}, numero B: ${numB} - Numero B è maggiore di Numero A`;
  printMessage(message)
}

function checkNumbers(){
  return numbers.length === 2;
}

function printMessage(n){
  document.getElementById('num').innerHTML = n;
}






