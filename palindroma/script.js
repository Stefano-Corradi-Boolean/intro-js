/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1. creo una funzione che giri la parola e restituisca la parola girata
2. salvo la parola dell'utente in una variabile 
3. confronto le parole genro l'output
*/

const word = 'anna' //prompt('Scrivi una parola').toLowerCase()
let message;

if(word === wordReverse(word)){
  message = 'la parola è palindroma'
}else{
  message = 'la parola NON è palindroma'
}

console.log(message);


function wordReverse(word){

  // let wordReveserd = '';
  // for(let i = word.length - 1; i >= 0; i--){
  //   wordReveserd += word[i]
    
  // }

  // return wordReveserd
  return word.split('').reverse().join('');
}

//console.log(word.split('').reverse().join(''));

