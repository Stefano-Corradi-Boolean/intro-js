

console.log('====== stampo 10 console log =============');
for (let i = 0; i < 10; i++) {
  console.log('ciclo con indice: ' + i);
}


console.log('====== stampo 10 console log leggendo il numero del ciclo =============');
for (let i = 0; i < 10; i++) {
  console.log(`Questo è il ciclo ${i + 1} e il valore di i = ${i}`);
}

console.log('====== stampo 10 console log decrementando =============');
for (let i = 10; i > 0; i--) {
  console.log('ciclo con indice: ' + i);
}

console.log('====== stampo la tabellina del 2 =============');
let numTab2 = 2;
for (let i = 0; i < 10; i++){
  console.log(numTab2);
  numTab2 += 2;
}

console.log('====== stampo una lettera per volta della parola "precipitevolissimevolmente" =============');
const parola = 'ciao';
// const parola = 'precipitevolissimevolmente';
for (let i = 0; i < parola.length; i++) {
  console.log(parola.at(i));
}

console.log('====== creo una parola speculare alla parola data  =============');
let parolaGirata = ''; // dichiaro la variabile come stringa vuota
for(let i = parola.length - 1; i >= 0; i-- ){
  parolaGirata += parola.at(i);
}
console.log(parolaGirata);

console.log('====== stampo i numeri dispari da 1 a 11 =============');
for (let i = 1; i <= 11; i++) {
  if(i % 2){
    console.log(i);
  }
}

console.log('====== stampo la tabellina del 5 usando una moltiplicazione =============');
const numTab5 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(numTab5 * i);
}

console.log('====== stampo i numeri che sono divisibili per 13 da 1 a 100 =============');
for (let i = 0; i < 100; i++){
  if(!((i+1) % 13)){
    console.log(i + 1);
  }
}

console.log('====== stampo il risultato della somma di tutti i numeri da 1 a 100 =============');
let somma = 0;
for (let i = 1; i <= 100; i++){
  somma += i;
}
console.log(somma);
console.log('====== stampo il seguente output =============');
console.log('*');
console.log('**');
console.log('***');
console.log('****');
console.log('*****');
console.log('******');
let stars = '';
for (let i = 0; i < 6; i++){
  stars += '*';
  console.log(stars);
  
}

console.log('====== conta quanti sono i numeri divisibili per 3 da 1 a 100 =============');
let counterMultipliDiTre = 0;
for (let i = 1; i <= 100; i++) {
  if(i % 3 === 0){
    counterMultipliDiTre++;
  }
}
console.log(counterMultipliDiTre);

console.log('====== dato un numero verificare se è un numero primo =============');
// risultati possibili: "Il numero N è un numero primo"
// "Il numero N NON è un numero primo"
const numDaVerificare = 1;
let isPrimo = true;
// logica
if(numDaVerificare > 1){
  for (let i = 2; i < numDaVerificare; i++){
    if(numDaVerificare % i === 0){
      isPrimo = false;
      console.log(i);
    }
  }
}
let messaggio;
if(isPrimo){
  messaggio = `Il numero ${numDaVerificare} è un numero primo`;
}else{
  messaggio = `Il numero ${numDaVerificare} NON è un numero primo`;

}

console.log(messaggio);


