
const firstname = 'Ugo';
const lastname = 'De Ughhi';
const age = 30;
const miaEmail = 'ugo@deughi.it';


// assegnando direttamente i nomi delle funzioni all'interno di un oggetto assegno implicitamente la chiav/valere della variabile passata

const chiaveEmail = 'email';
const user = {
  firstname,
  lastname,
  age,
  [chiaveEmail]: miaEmail, // chiave dinamica,
  hobbies:['cucina', 'rammendo', 'curling', 'giardinaggio' ]
}


// const user = {
//   firstname: firstname,
//   lastname: lastname,
//   age: age
// }

console.log(user);

// DESTRUTTURAZIONE di un oggetto
function stampaNomeCognomeEmailDaUser(user){
  // const firstname = user.firstname;
  // const lastname = user.lastname;
  // const email = user.email;
  
  // salvo nelle costanti con lo stesso nome delle proprità solo quelle che mi servono
  // le costanti che mi occorrono devono essere dentro le graffe separate da virgola
  const {firstname, lastname, email} = user;

  console.log(`${firstname} ${lastname} ${email}`);
  
}

stampaNomeCognomeEmailDaUser(user)

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

const teamList = document.getElementById('team');
for(let person of team){
  const {firstname, lastname} = person;
  teamList.innerHTML += `
    <li>${firstname} ${lastname}</li>
  `
}


// REST
function funzioneConParametrOpzionali(firstname, lastName, ...args){
  // args è di defaul un array vuoto
  // nel caso vengano inserti dei parametri opzionali verranno pushati nell'array
  let age = '', zipCode = '';
  if(args.length === 1){
    age = 'Anni: ' + args[0]
  } else if(args.length === 2){
    age = 'Anni: ' + args[0]
    zipCode = 'CAP: ' +args[1]
  }
  document.getElementById('names').innerHTML += `<li>${firstname} ${lastName} ${age} ${zipCode}</li>`
}

funzioneConParametrOpzionali('giuseppe', 'verdi');
funzioneConParametrOpzionali('mario', 'rossi', 50, 20100);
funzioneConParametrOpzionali('martina', 'bianchi', 20);

// SPREAD
const pizzaMargherita = {
  name: 'Margherita',
  price: 7,
  ingredints: ['pomodoro', 'mozzarella', 'basilico']
}
// NON E' UN CLONE perché in pratica sto aggiungendo un nome allo stesso oggetto
const copiaPizza = pizzaMargherita;

// con l'operatore spread vongono associati tutte del chiavi/valore dell'oggetto di riferimento
const clonaPizza = { ...pizzaMargherita }
const clonaPizzaPlus = { ...pizzaMargherita, img:'miaimmagine.jpg' }

console.log(copiaPizza);
copiaPizza.price = 9;
console.log("pizzaMargherita", pizzaMargherita);
clonaPizza.price = 10;
console.log("pizzaMargherita", pizzaMargherita);
console.log("clonaPizza", clonaPizza);
console.log("clonaPizzaPlus", clonaPizzaPlus);


// DEATRUTTURAZIONE ARRAY
const arrUser = ['Ugo', 'De Ughi', 30, 'Via Dei platani', 'Milano'];
// associo a ogni indice dell'array il nome di una variabile arbitraria
// se devo saltare un indice lo faccio mettendo due virgole
const [nome, cognome, anni ,, citta] = arrUser;
console.log('DEATRUTTURAZIONE ARRAY -> ',nome, cognome, anni, citta);

// SPREAD di ARRAY
const colori = ['giallo', 'verde', 'blu'];
const altriColori = ['viola', 'rosa', 'lilla', 'arancione'];

const cloneColori = [...colori];
console.log('cloneColori',cloneColori);

const concatenazioneArrayDiColori = [...colori, ...altriColori];
console.log('concatenazioneArrayDiColori',concatenazioneArrayDiColori);




