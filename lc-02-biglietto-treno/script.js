/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1. impostazione dati di partenza (salvo nelle fariabili prezzo per chilometro e sconti)
2. salvataggio in due variabili il risultato dei prompt su età e km
3. logica per il calcolo dello seconto e del messaggio di output
4. stampa del messaggio

*/

// 1.
const pricePerKm = 0.21;
const youngDiscount = 20;
const silverDiscount = 40;
const silverLimit = 65;

let message, price, discountPrice;

// 2.
const age = parseInt(prompt('Quanti anni hai?'));
const km = parseInt(prompt('Quanti Km devi percorrere?'));

// 3.
price = discountPrice = km * pricePerKm;

if (age < 18) {
  discountPrice -= price * youngDiscount / 100; 
  message = `Sei minorenne quindi hai lo sconto del ${youngDiscount}%! 
  Il prezzo del tuo biglietto non sarà quindi € ${price.toFixed(2)} ma di soli € ${discountPrice.toFixed(2)}
  `
} else if (age >= silverLimit) {
  discountPrice -= price * silverDiscount / 100; 
  message = `Hai più di ${silverLimit} anni quindi hai lo sconto del ${silverDiscount}%! 
  Il prezzo del tuo biglietto non sarà quindi € ${price.toFixed(2)} ma di soli € ${discountPrice.toFixed(2)}
  `
} else {
  message = `Il prezzo del tuo biglietto è di € ${price}`
}

// 4.
console.log(message);

