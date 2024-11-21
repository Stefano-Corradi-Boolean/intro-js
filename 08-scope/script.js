
// name è una variabile globale
const name = 'Ugo';

const age = 18;

if(age >= 18){
  // messaggio esiste solo allinterno di questo if
  const messaggio = 'Ciao ' + name;
  console.log(messaggio);
  
}

// questo genera un errore perché la variabile messaggio è stata dichiarata ll'interno di un if e non globalmente
console.log(messaggio);