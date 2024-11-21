// L'utente onserisce 2 parole
// Generare un output per ogni condiaione ossia se la prima parola è più lunga, se la seconda parola è più lunga oppure se la lunghezza delle due parole corrisponde


const parola1 = prompt('Inserisci una parola');
const parola2 = prompt('Inserisci un\'altra parola');


console.log(parola1, parola2);

if (parola1.length > parola2.length) {
  console.log('la parola 1 è più lunga della parola due');
} else if (parola1.length < parola2.length){
  console.log('la parola 2 è più lunga della parola 1');
} else {
  console.log('le parole sono lunghe uuguali');
}  

