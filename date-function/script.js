/*
Il programma restituisce la data fomatatta es: 19 novembre 2024, ore 12, 33 minuti e 50 secondi utilizzando una funzione
un'altra funzione restituisce l'ora in formato HH:mm:ss
*/








console.log(getNow());
console.log(getClock());

function getClock(){

  const now = new Date();
  let hour = now.getHours()
  let minuts = now.getMinutes()
  let seconds = now.getSeconds()
  if(hour < 10) hour = `0${hour}`;
  if(minuts < 10) minuts = `0${minuts}`;
  if(seconds < 10) seconds = `0${seconds}`;

  return `${hour}:${minuts}:${seconds}`
}



function getNow(){
  /*
    1. salvo la data di oggi in una const
    2. dalla data di oggi prendo il giorno
    3. salvo il mese in parola ???
    4. concateno l'anno
  */

  const mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

  const now = new Date();
  const day = now.getDate();
  const month = mesi[now.getMonth()];
  const year = now.getFullYear();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const oraFormattata = getOraFormattata(hour, minutes, seconds)

  return `${day} ${month} ${year}, ${oraFormattata}`
}

function getOraFormattata(ora, minuti, secondi){

  if(ora < 10) ora = `0${ora}`;
  if(minuti < 10) minuti = `0${minuti}`;
  if(secondi < 10) secondi = `0${secondi}`;

  return `ore ${ora}, ${minuti} minuti e ${secondi} secondi `
}