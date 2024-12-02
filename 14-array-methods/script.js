const colori = ['giallo', 'verde', 'rosso', 'blu', 'viola'];

const team = [
  {
    id: 1,
    firstname: 'Ugo',
    lastname: 'De Ughi',
    age: 30,
  },
  {
    id: 2,
    firstname: 'Giuseppe',
    lastname: 'Verdi',
    age: 80,
  },
  {
    id: 3,
    firstname: 'Martina',
    lastname: 'Bianchi',
    age: 20,
  },
  {
    id: 4,
    firstname: 'Mario',
    lastname: 'Rossi',
    age: 30,
  },
  {
    id: 5,
    firstname: 'Guondalina',
    lastname: 'Azzurri',
    age: 40,
  },
  {
    id: 6,
    firstname: 'Anastasia',
    lastname: 'Genoveffa',
    age: 18,
  }
]


/////////////////////////////////////////
/// FOREACH /////////////////////////////
/////////////////////////////////////////

// forEach() accetta 3 parametri -> elemento ciclato, indice e tutto l'array
colori.forEach((elemento, indice, array) => {
  console.log(elemento, indice);
  console.log(array);
})

console.log('======== element ===========');
colori.forEach((element) => {
  console.log(`Il colore di questo ciclo è ${element}`);
})

console.log('======== seza graffe ===========');

// seza graffe
colori.forEach( e => console.log(`Il colore di questo ciclo è ${e}`));

console.log('======== element, index ===========');
colori.forEach((element, index) => {
  console.log(`Il colore di questo ciclo è ${element} a indice ${index}`);
})



console.log('======== senza destrutturazione ===========');
team.forEach( el => {
  console.log(`${el.firstname} ${el.lastname}`);
})

console.log('======== con destrutturazione ===========');
team.forEach( member => {
  const {firstname, lastname} = member;
  console.log(`${firstname} ${lastname}`);
})

/////////////////////////////////////////
/// MAP  ////////////////////////////////
/////////////////////////////////////////


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('======== map ===========');

// map() accetta gli stessi parametri di forEach() ma restitiusice un array in base alla logica del return
// l'array restituito ha la stessa lunghezza dellarray ciclato
const quadrati = numeri.map( (numero) => {
  // ado gni ciclo il return pusha il risultato della logica nell'array dichiarato
  return numero * numero;
} )
console.log(quadrati);

console.log('======== stessa logica con for() ===========');
const quadratiFor = [];
for (let index = 0; index < numeri.length; index++) {
  quadratiFor.push(numeri[index] * numeri[index])
}
console.log(quadratiFor);

console.log('======== stessa logica con for/of() ===========');
const quadratiForOf = [];
for (let numero of numeri) {
  quadratiForOf.push(numero * numero)
}
console.log(quadratiForOf);

console.log('======== stessa logica con forEach() ===========');
const quadratiForEach = [];
numeri.forEach((numero) => {
  quadratiForEach.push(numero * numero)
})
console.log(quadratiForEach);

console.log('======== map con return impicito ===========');
const quadratiSmart = numeri.map( numero => numero * numero )

console.log(quadratiSmart);

// generazione di un nuovo array di stringhe
// ogni stringa è ccostituita dla nome cognome di ogni elemento del team
// es ['Ugo De Ughi', 'Giuseppe Verdi', ecc]
console.log('======== map del team base  ===========');
const nomi = team.map( (member) => {
  return `${member.firstname} ${member.lastname}`
})
console.log(nomi);

console.log('======== map del team con destrutturazione  ===========');
const nomi2 = team.map( member => {
  const { firstname, lastname } = member;
  return `${firstname} ${lastname}`
} )
console.log(nomi2);

console.log('======== map del team con destrutturazione implicita  ===========');
// destrutturo l'oggetto nel momento in cui viene ciclato
const nomi3 = team.map( ({ firstname, lastname }) => {
  return `${firstname} ${lastname}`
} )
console.log(nomi3);

console.log('======== map del team con  return implicito  ===========');
const nomi4 = team.map( member =>  `${member.firstname} ${member.lastname}`)
console.log(nomi4);

console.log('======== map del team con destrutturazione implicita e return implicito  ===========');
// destrutturo l'oggetto nel momento in cui viene ciclato
// inoltre la tringa viene pushata ad ogni ciclo implicitamente essendo una arrow funcion con return impicito
const nomi5 = team.map( ({ firstname, lastname }) =>  `${firstname} ${lastname}`)
console.log(nomi5);


/////////////////////////////////////////
/// FILTER  /////////////////////////////
/////////////////////////////////////////

// filter() finziona in modo simile a map() ma restituisce nel nuovo array l'elemento ciclato in base ad una determinata condizione
console.log('======== filter con for/of ===========');
const numeriPariForOf = [];
for(let numero of numeri){
  if(numero % 2 === 0) numeriPariForOf.push(numero)
}
console.log(numeriPariForOf);

console.log('======== filter con filter()===========');
const numeriPariFilter1 = numeri.filter( numero => {
  // filter ha bisogno di un return booleano
  // l'elemnto ciclato viene pushato ina caso di true
  return numero % 2 === 0
})
console.log(numeriPariFilter1);
console.log('======== filter() con return imoplicito ===========');
const numeriPariFilter2 = numeri.filter( numero => !(numero % 2))
console.log(numeriPariFilter2);

console.log('======== filter() di team >= 30 anni ===========');
const oldTeam = team.filter( member => {
  return member.age >= 30
})
console.log(oldTeam);

console.log('======== filter() di team >= 30 anni con return implicito ===========');
const oldTeam2 = team.filter( member => member.age >= 30)
console.log(oldTeam2);
console.log('======== filter() di team >= 30 anni con destrutturazione implicita e return implicito ===========');
const oldTeam3 = team.filter( ({age}) => age >= 30)
console.log(oldTeam3);

console.log('======== filter() di team cin nome più lingo di 5 caratteri ===========');
const teamNomiLunghi = team.filter( member => {
  return member.firstname.length > 5
} )

console.log('======== filter() di team cin nome più lingo di 5 caratteri con return implicito ===========');
console.log(teamNomiLunghi);
const teamNomiLunghi2 = team.filter( member =>  member.firstname.length > 5)
console.log(teamNomiLunghi2);


/////////////////////////////////////////
/// FIND  ///////////////////////////////
/////////////////////////////////////////

// find() come filter() deve avere un return con un valore boolano
// viene restituito il primo elemento che riaponde alla condizione
console.log('======== find() primo numero pari ===========');
const primoNumeroPari = numeri.find(numero => {
  return numero % 2 === 0
})
console.log(primoNumeroPari);

console.log('======== find() primo numero pari comn return implicito ===========');
const primoNumeroPari2 = numeri.find(numero => !(numero % 2))
console.log(primoNumeroPari2);


console.log('======== find() cerco nel team "Martina Bianchi"  ===========');
const martina = team.find(member => {
  return member.firstname === 'Martina' && member.lastname === 'Bianchi'
})
console.log(martina);

console.log('======== find() cerco nel team il membro con id = 5  ===========');
const member5 = team.find( member => member.id === 5)
console.log(member5);





