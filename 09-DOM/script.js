
console.log('DOM');

// salvo in una variabile l'elemento HTML
const titolo = document.getElementById('titolo')
console.log(titolo);

// innerHTML mostra il contenuto dell'elemento
console.log(titolo.innerHTML);

// leggo l'elenco delle classi di un elemento
console.log(titolo.classList);

// aggiungo una classe
titolo.classList.add('underline', 'big')

// rimuovo una classe
titolo.classList.remove('upper')

// className retituisce in forma di stringa le classi CSS
console.log(titolo.className);


// sovrascrivo il contenuto del tag
//titolo.innerHTML = 'Buongiorno';

// concateno al contenuto HTML
titolo.innerHTML += ', come va?'

// querySelector() accetta come parametro qualsiasi selettore CSS e se ne trova più di uno resrtituisce il primo
const primoParagrafo = document.querySelector('.paragrafo');

console.log(primoParagrafo.innerHTML);

console.log(primoParagrafo.className);

// aggiungo una classe con className utilizzando la sintassi delle stringhe
primoParagrafo.className += ' upper'

console.log(primoParagrafo.className);

const secondoParagrafo = document.querySelector('.secondo');

console.log(secondoParagrafo.classList);

// con style si possono definire gli stile CSS
secondoParagrafo.style.color = 'blue';
secondoParagrafo.style.borderBottom = '1px solid black'

// seleziono un div
const divPrincipale = document.querySelector('#sezione-principale > div')
const firstname = 'Ugo';
const lastName = 'de Ughi';
const age = 30;

// aggiungo un blocco HTML al div selezionato
divPrincipale.innerHTML = `
  <h4>Ciao ${firstname} ${lastName}, oggi compi ${age} anni</h4>
  <p class="rosso" id="paragrafo-pricipale">
  Sono il paragrafo principale! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia corporis adipisci nostrum numquam est ex, architecto doloremque maxime reprehenderit? Numquam placeat laboriosam quidem doloremque culpa totam labore modi maiores eum?</p>
`
console.log(divPrincipale);

// seleziono il paragrafo creato dinamicamente e lo modifico
const paragrafoPrincipale = document.getElementById('paragrafo-pricipale');
paragrafoPrincipale.innerHTML += ' TESTO AGGIUNTO'
console.log(paragrafoPrincipale.innerHTML);


/// INTERAZIONE CON L'UTENTE
const bottone = document.getElementById('mioBottone');
const target = document.getElementById('target');

// addEventListener() mantiene in "ascolto" un determinato elemento e una volta intercettato l'evento invoca una funzione
// elemento.addEventListener('evento', funzione)

// sintassi con funtion anonima
// bottone.addEventListener('click', function() {
//   console.log('mi hai cliccato');
//   target.innerHTML = 'Abbiamo cliccato il bottone'
// })

// sintassi con arrow-funtion anonima
// bottone.addEventListener('click', () => {
//   console.log('mi hai cliccato');
//   target.innerHTML = 'Abbiamo cliccato il bottone'
// })

// sintassi con funzione esterna che deve essere passata come secondo parametro senza tonde
// bottone.addEventListener('click', handlerCick);
// function handlerCick(){
//   target.innerHTML = 'Abbiamo cliccato il bottone!!'
// }

bottone.addEventListener('click', () => {
  const mioMessaggio = 'Sono il messaggio passato come parametro';
  stampaConParametroAlClick(mioMessaggio);
})
function stampaConParametroAlClick(message){
  target.innerHTML = message
}


// nascondo il primo paragrafo
const bottoneCancella = document.getElementById('cancella-paragrafo');
bottoneCancella.addEventListener('click', () => {
  primoParagrafo.classList.add('hide');
})

//toggle del secondo paragrafo campiando anche il testo del bottone
/*
al click del bottone effettuiamo il toggle della classe hide sul secondo paragrafo e modifichiamo l'innerHTML
*/

const btnToggle = document.getElementById('toggle-secondo-paragrafo');

// logica con classList.contains()
btnToggle.addEventListener('click', () => {
  secondoParagrafo.classList.toggle('hide')
  console.log(secondoParagrafo.classList.contains('hide'));
  btnToggle.innerHTML = secondoParagrafo.classList.contains('hide') ? 'Mostra secondo paragrafo' : 'Cancella secondo paragrafo';

  // if(secondoParagrafo.classList.contains('hide')){
  //   btnToggle.innerHTML =  'Mostra secondo paragrafo' 
  // }else{
  //   btnToggle.innerHTML =  'Cancella secondo paragrafo' 
  // }
})

// logica con status salvato in un flag
// let isClcked = false;
// btnToggle.addEventListener('click', () => {
//   secondoParagrafo.classList.toggle('hide')
//   btnToggle.innerHTML = isClcked ? 'Cancella secondo paragrafo' : 'Mostra secondo paragrafo';
//   // toggle di una variabile booleana 
//   isClcked = !isClcked;
// })


// al click di toggle-terzo-paragrafo il testo del terzo paragravo risulta sottolineato oppure vine tolta al sottolineatura e cambiato il testo del bottone
const terzoParagrafo = document.querySelector('.terzo');
const btnToggleTerzo = document.getElementById('toggle-terzo-paragrafo');
const msgSottolinea = 'Sottolinea terzo paragrafo';
const msgTogli = 'Togli sottolineatura';

btnToggleTerzo.innerHTML = msgSottolinea; // assegno un testo di default al innerHtml del bototne

btnToggleTerzo.addEventListener('click', () => {
  terzoParagrafo.classList.toggle('underline');
  btnToggleTerzo.innerHTML = terzoParagrafo.classList.contains('underline') ? msgTogli : msgSottolinea
})

// al passaggio del mouse sopra il paragrafo-mouse-over si colori lo sfondo e venga tolto il colore una volta uscito
const paragrafoOver = document.getElementById('paragrafo-mouse-over');

paragrafoOver.addEventListener('mouseover', () => {
  paragrafoOver.classList.add('bg-colored')
})
paragrafoOver.addEventListener('mouseout', () => {
  paragrafoOver.classList.remove('bg-colored')
})

// leggo il valore di un input
const inputTest =  document.getElementById('inputTest');
const btnLeggoValue =  document.getElementById('leggoValue');
const printValue =  document.getElementById('print-value');

// input è un evento dell'elemnto input che itercetta ogni cambiamento del value dell'elemnto
inputTest.addEventListener('input', () => {
  printValue.innerHTML = inputTest.value;
  
})

btnLeggoValue.addEventListener('click', () => {
  console.log(inputTest.value);
  
  printValue.innerHTML = inputTest.value;
})


// agiungo il logo dinamicamnete
//img/logo.svg
const pathImage = 'img/logo.svg';
const logoEl = document.querySelector('.logo img')
// associo il percorso dell'immagine alla proprità src dell'elemento che p un tag img
logoEl.src = pathImage;
console.log(logoEl.src);
