/*
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email

1. salvare in una variabile il prompt dell'utente
2. con un ciclo for verifico la presenza o meno dell'email inserita
3. generazione del messaggio di output
*/

const emails = [
  'ugo@boolean.careers',
  'giuseppe@boolean.careers',
  'martina@boolean.careers',
]

const emailUtente = 'ugo@boolean.careers' // prompt('inserisci la tua email');
let message;

// LOGICa CON CILO FOR
// let emaiTrovata = false;

// for(let i = 0; i < emails.length; i++){
//   const email = emails[i];
//   if(email === emailUtente){
//     emaiTrovata = true;
//   }
// }

// if(emaiTrovata){
//   message = 'Puoi entrare'
// }else{
//   message = 'Non puoi entrare'
// }

// LOGICA CON INCLUDES
if(emails.includes(emailUtente)){
  message = 'Puoi entrare'
}else{
  message = 'Non puoi entrare'
}



console.log(message);