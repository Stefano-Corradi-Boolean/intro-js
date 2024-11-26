

/*
setTimeout() accetta 2 parametri
1 . una funzione
2. il tempo di latenza prima dell'esecuzione della funzione in millisecondi

- allo scadere del tempo viene invocata la funzione una volta sola
- la funzione può essere una funzione esterna o una funzione anonima 


*/
setTimeout(saluta, 3000);

console.log('1');

function saluta(){
  console.log('4' );
}

console.log('2');

// setTimout con sintassi arrow-function anonima
setTimeout(() => {
  console.log('3' );
}, 2000)


// setTimout con sintassi function() anonima
setTimeout(function(){
  console.log('5' );
}, 4000)

setTimeout(function(){
  console.log('6');
}, 5000)

console.log('2bis');

// setInterval() sintatticamente funziona come setTimout() ma la funzione viene invocata all'infinito in base ai millisecondi che vengono passati come secondo parametro
let counter = 0;
// salvando il setInterval() in una variabile posso interomperlo con un clearInterval
const clock = setInterval(function(){
  counter++;
  console.log(counter);

  if(counter > 9){
    // quando il contatore raggiunge 10 setInterval() si interrompe
    clearInterval(clock)
  }
},200)

console.log(clock);


const clock2 = setInterval(myFunction, 1000);
//console.log(clock) <- cosa ci restituirà?
let counter2 = 0;
function myFunction() {
  counter2++;
 console.log('counter2: ',counter2);
}

// dopo 5 sec interrompo clock2
setTimeout(() => {
  clearInterval(clock2)
}, 5000)


///////////////
setTimeout(esciDalParcheggio, 4000); 

passaAuto('Macchina nera');
passaAuto('Macchina rossa');

function esciDalParcheggio() {
   console.log('Esco dal parcheggio!');
}

function passaAuto(nomeAuto){
  console.log("Sta passando la " + nomeAuto);
  // codice che fa passare l'automobile nomeAuto
  console.log("È passata la " + nomeAuto);
}


