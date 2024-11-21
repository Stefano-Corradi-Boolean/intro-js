console.log('array');


const colori = ['giallo', 'rosso', 'verde', 'blu', 'arancione', 'viola', 'marrone'];

console.log(colori);

// aggiungo un elemento all'array
colori.push('rosa');

console.log(colori);

// rimuovo l'ultimo elemento
colori.pop();
console.log(colori);

// rimuovo il primo elemento
colori.shift();
console.log(colori);

// aggiungo in elemento all'inizio dell'array
colori.unshift('indaco');
console.log(colori);
console.log(colori);

// slice restituisce un array prendendo gli elementi di un altro array fra due indici
const coloriScelti = colori.slice(2, 4)
console.log(coloriScelti);

// splice rimuove l'elemento ad indice indicato come primo parametro e per quanti elementi si vuole
const coloriEliminati = colori.splice(1,2);
console.log(coloriEliminati);
console.log(colori);

// trasformo l'array in stringa collegando gli elementi con un pipe e spazio e la salvo in una variabile
const stringa = colori.join(' | ');
console.log(stringa);


// ottengo la lunghezza dell'array
console.log(colori.length);

// lettura di tutti gli elementi di un array
for (let i = 0; i < colori.length; i++){
  console.log(colori[i]);
  
}


// trasfromo una stringa in un array
const stringaNomi = 'ugo|giuseppe|mario|antonio|martina';
// spplit genra un array da una stringa in base al separatore passato
const arrNomi = stringaNomi.split('|');
console.log(arrNomi);

// conto le parole
const miaStriga = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias, sit necessitatibus dolorem, quam ab laboriosam eveniet nam exercitationem inventore rem enim veniam nisi voluptatum? Similique nostrum illum itaque nemo!';

const numeroParole = miaStriga.split(' ').length;
console.log(numeroParole);

