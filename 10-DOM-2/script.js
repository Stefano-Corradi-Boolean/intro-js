
const colori = ['giallo', 'verde', 'rosso', 'blu', 'lilla', 'rosa'];

const colorsList = document.getElementById('colors-list');

// creo la lista dinamicamente.

// ad ogni ciclo concateno la stringa contenente il tag li col colore del ciclo
// for(let i = 0; i < colori.length; i++){
//   colorsList.innerHTML += `<li>${colori[i]}</li>`
// }

// ad ogni ciclo creo la stringa con tutti gli li e in un secondo momento la associo all'innerHTML della lista
// let listColorsString = '';
// for(let i = 0; i < colori.length; i++){
//   listColorsString += `<li>${colori[i]}</li>`
// }
// colorsList.innerHTML = listColorsString;


// ad ogni ciclo creo un nuovo elemento li e lo allocio alla lista
for(let i = 0; i < colori.length; i++){
  const listItem = document.createElement('li');
  listItem.append(colori[i]);
  // se è pari il colore sarà rosso
  if(!((i + 1) % 2)){
    listItem.className = 'rosso';
  }
  colorsList.append(listItem)
}