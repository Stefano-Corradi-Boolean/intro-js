
const adesso = new Date();

console.log(adesso.getDate());
console.log(adesso.getMonth()); // restituisce il numero del mese su base 0 -> nov = 10
console.log(adesso.getDay()); // giorno della settimana
console.log(adesso.getHours());
console.log(adesso.getMinutes());
console.log(adesso.getSeconds());
console.log(adesso.getMilliseconds());
console.log(adesso.getTime()); // millisecondi dal primo gennaio 1970
console.log(adesso.getFullYear());


// stampo la data in formato gg/mm/YYYY
const giorno = adesso.getDate();
const mese = adesso.getMonth() + 1;
const anno = adesso.getFullYear();

const dataFormattata = `${giorno}/${mese}/${anno}`

console.log(dataFormattata);

// quanti miniuti mancano alla ifne della lezione?

const minutiMancanti = 60 - adesso.getMinutes();
console.log(minutiMancanti);

