// https://flynn.boolean.careers/exercises/api/random/mail

/*
  1. resetto / inizializzo
  2. al click del bottone eseguo 10 chiamate all'API
  3. ad ogni risultato della chiamata pusho l'email ricevuta in un array
  4. ad ogni chiamata verifico se ho completatato le chiamate richieste
  5. se SI elimino il loading e stampo la lista delle emails



 */

const btn = document.querySelector('.btn');
const list = document.querySelector('ul');
const loader = document.querySelector('.loader');
const errorEl = document.querySelector('.text-danger');

btn.addEventListener('click', fetchEmails)

// DATI
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const limit = 10;
let emails = [];


init();

function fetchEmails(){
  emails = [];
  loader.classList.remove('d-none')
  list.classList.add('d-none')
  list.innerHTML = '';
  errorEl.innerHTML = '';

  for(let i = 0; i < limit; i++){
    axios.get(endpoint)
     .then(res => {      
      emails.push(res.data.response)
      if(emails.length === limit) printEmailsList()
     })
    .catch(e => {
      printError(e.message);
    })
  }
}

function printError(errorMsg){
  loader.classList.add('d-none');
  errorEl.innerHTML = errorMsg;
}

function printEmailsList(){
  loader.classList.add('d-none')
  list.classList.remove('d-none')
  emails.forEach(el => list.innerHTML += `<li class="list-group-item">${el}</li>`)
}

function init(){
  list.classList.add('d-none');
  loader.classList.add('d-none');
}