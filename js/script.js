

// questo è un commento su una riga

/*
questo è un 
commento
su più righe
*/

// dichiarazione varibili 
console.log(miaVariabileObsoleta); // non genera errore ma restituisce undefined

var miaVariabileObsoleta = 'vecchia variabile'; // no! obsoleto 

// il valore delle variabili let puù essere modificato dopo la dichiarazione della stessa quindi le posso anche dichiarare senza assegnare nessun valore
let varibileChePuoCambiareValore = 'valore di partenza';
let altraVariabile;
let altra_variabile;
let variabile_1;
let numero; // dichiarazione
console.log('numero = ', numero);  // undefined

numero = 5; // assegnazione

const pGreco =  3.141592653589793;

let utenteLoggato = false;


// console.log('lettera = ', lettera); genera errore bloccante
let lettera = 'A';
console.log('lettera = ', lettera);
lettera = 'B';
console.log('lettera = ', lettera);
console.log('la variabile lettera è di tipo: ',typeof lettera);
console.log('la variabile numero è di tipo: ',typeof numero);
console.log('la variabile pGreco è di tipo: ',typeof pGreco);
console.log('la variabile utenteLoggato è di tipo: ',typeof utenteLoggato);


//let altra-variabile; ERRORE
//let 1; ERRORE

// le variabilli const nel momento in cui vengoni dichiarate bisogna assegnare un valore perché questo non puù essere modificato
const variabileCheNonPuoCambiareValore = 'mio valore che non può cambiare'; 


console.log('numero = ', numero);
console.log(lettera, numero);
console.log('varibileChePuoCambiareValore = ',varibileChePuoCambiareValore);
console.log('variabileCheNonPuoCambiareValore = ',variabileCheNonPuoCambiareValore);

console.log('================ STRINGHE ===========================');


let saluto = 'Ciao';
const firstName = 'Ugo';
let fineFraseSaluto = ', tutto bene?';
// sintassi in caso di apice singolo
// let frase = 'L\'altro giorno c\'era il sole';

// il segno + concatena le stringhe
// questa operazione la si può fare su una sola riga
let salutoCompleto = saluto + ' ' + firstName;
console.log(salutoCompleto);
//salutoCompleto = salutoCompleto + fineFraseSaluto;
let frase = "L'altro giorno c'era il sole";
salutoCompleto += fineFraseSaluto;
console.log(salutoCompleto);
console.log(frase);

// indexOf() restituisce l'indice della sottostringa su base 0
let posizioneDellaParola = frase.indexOf('giorno');
let posizioneDellaLettera = frase.indexOf('g');
let posizioneParolaNonTrovata = frase.indexOf('notte');
let sottostringa1 = frase.substr(8,6);
let sottostringa2 = frase.substring(8,14);
let fraseMaiuscola = frase.toUpperCase();
let fraseCorretta = frase.replace('il sole', 'brutto tempo');
console.log('posizioneDellaParola ',posizioneDellaParola);
console.log('posizioneDellaLettera ',posizioneDellaLettera);
console.log('posizioneParolaNonTrovata ',posizioneParolaNonTrovata);
console.log('sottostringa1 ',sottostringa1);
console.log('sottostringa2 ',sottostringa2);
console.log('fraseMaiuscola ',fraseMaiuscola);
console.log('fraseCorretta ',fraseCorretta);



// template literal
let testo = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur unde, iste incidunt odit, cupiditate illum eum cum nam vitae expedita architecto culpa placeat tempora voluptatum et aliquam molestiae? Minus.
Ciao ${firstName} ${fineFraseSaluto}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur unde, iste incidunt odit, cupiditate illum eum cum nam vitae expedita architecto culpa placeat tempora voluptatum et aliquam molestiae? Minus.
`

console.log(testo);
let lunghezzaTesto = testo.length;
console.log('lunghezzaTesto = ',lunghezzaTesto);

const posizioneDiNome = testo.indexOf(firstName);
console.log('posizioneDiNome', posizioneDiNome);



console.log('============STRINGHE NUMERICHE ===============================');

let mioNumero = 5;
let miaStringaNumerica = '5';
let altraStringaNumerica = '12';
console.log(mioNumero);
console.log('la variabile mioNumero è di tipo: ',typeof mioNumero);
console.log(miaStringaNumerica);
console.log('la variabile miaStringaNumerica è di tipo: ',typeof miaStringaNumerica);

let sommaStringheNumeriche = miaStringaNumerica + altraStringaNumerica;
console.log(sommaStringheNumeriche);
// parseInt trasforma una stringa numerica in intero 
let sommaReale = parseInt(miaStringaNumerica) + parseInt(altraStringaNumerica);
console.log('sommaReale = ', sommaReale);
let sottrazioneStringheNumeriche =  altraStringaNumerica - miaStringaNumerica;
console.log(sottrazioneStringheNumeriche);

console.log('=================== NUMERI ========================');

let num1 = 10;
let num2 = 5;
let num3 = 3;

let somma = num1 + num2;
console.log('somma ', somma);
// somma = somma + num3;
somma += num3;
console.log('somma ', somma);

let sottrazione = num1 - num2;
console.log('sottrazione ', sottrazione);

let divisione = num1 / num2;
console.log('divisione ', divisione);

let moltiplicazione = num1 * num2;
console.log('moltiplicazione ', moltiplicazione);
console.log('moltiplicazione ', moltiplicazione);

// incremento
num1++;
console.log('num1 ', num1);
//decremento
num1--;
console.log('num1 ', num1);

let numeroConVirgola = 5.6566545;
// toFixed() resrituisce un numero float arrotondato al quanti decimali vogliamo sotto forma di stringa
let numeroFixed = numeroConVirgola.toFixed(2); 
console.log(numeroFixed);

let prezzo = 99.9;
let prezzoFixato = prezzo.toFixed(2);
let prezzoToString = prezzo.toString();
console.log('prezzoFixato', prezzoFixato);
console.log('prezzoToString', prezzoToString);
console.log('la variabile prezzoFixato è di tipo: ',typeof prezzoFixato);
console.log('la variabile prezzoToString è di tipo: ',typeof prezzoToString);




