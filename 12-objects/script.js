
// gli oggetti sono definiti tramite e graffe
// le proprità sono definite con chiave:valore
// se ci sono più proprità vanne separate da virgola
const user = {
  firstname: 'Ugo',
  lastname: 'De Ughi',
  'main-hobby': 'Golf', // il nome della proprità ha il trattino quindi devo dichiararla con le virgolette
  age: 30,
  hobbies: ['golf', 'cucina', 'lettura']
}

console.log(user);


// leggo la proprità lastname
// sintassi col punto
console.log('user.lastname',user.lastname);

// sintassi con le parentesi quadre
console.log(user['lastname']);

// sovrascrivo una proprità esistente
user.lastname = 'Verdi';
console.log('user.lastname',user.lastname);

// aggiungo una nuova proprità
user.phone = '+39321321321';
console.log(user);


console.log(user["main-hobby"]);

console.log("== ciclo di una proprità di tipo array ===========================");
for(let i = 0; i < user.hobbies.length; i++){
  const hobby = user.hobbies[i]
  console.log(hobby);
}

const chiaveOggetto = 'age' //prompt('scrivi una proprità');
console.log('user[chiave]', user[chiaveOggetto]);

console.log("== ciclo for in===========================");
// leggo tutte le proprità di un oggetto
// for in legge tutte le proprità di un oggetto restiuendo nella let che chi diachiaro il nome di ogni singola chiava
for(let key in user){
  console.log(`Chiave: ${key}, valore: ${user[key]}`);
}

console.log("== ciclo for in con array =========================");
const colori = ['giallo', 'rosso', 'verde'];
for(let index in colori){
  console.log(`Chiave: ${index}, valore: ${colori[index]}`);
}
console.log("== ciclo for of  =========================");
// con for of ottengo ogni singolo elemento dell'array senza usare l'indice
for(let colore of colori){
  console.log(`Elemnto dell'array: ${colore}`);
}


// ARRAY DI  OGGETTI
const team = [
  {
    firstname: 'Ugo',
    lastname: 'De Ughi',
    age: 30,
  },
  {
    firstname: 'Giuseppe',
    lastname: 'Verdi',
    age: 80,
  },
  {
    firstname: 'Martina',
    lastname: 'Bianchi',
    age: 20,
  }
  
]
console.log("== array di oggetti =========================");
console.log(team);
console.log("== ciclo for array di oggetti =========================");
for(let i = 0; i < team.length; i++){
  const person = team[i]
  for(let key in person){
    console.log(`Chiave: ${key}, valore: ${person[key]}`);
  }
  console.log('----------');
}
console.log("== ciclo for of array di oggetti =========================");
for(let person of team){
  for(let key in person){
    console.log(`Chiave: ${key}, valore: ${person[key]}`);
  }
  console.log('----------');
}

console.log("== ciclo for array di oggetti STAMPO SOLO I NOMI E COGNOMI =========================");
for(let i = 0; i < team.length; i++){
  const person = team[i]
  console.log(`Nome ${person.firstname}, cognome: ${person.firstname}`);
}
