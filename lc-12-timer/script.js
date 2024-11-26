/*
al click di start parte il timer ogni secondo e si disabilita il bottone start
al click di stop si resetta il timer e si disabilita il bottone stop

*/

const display =  document.getElementById('display');
const startBtn = document.querySelector('.btn-success');
const stopBtn = document.querySelector('.btn-danger');

// deve essere un elemento globale per potere essere "visto" in scope separati
let timer;

// evento al click di START
startBtn.addEventListener('click', () => {
  // gestione bottoni
  startBtn.disabled = true;
  stopBtn.disabled = false;

  let counter = 0;
  display.innerHTML = counter;

  timer = setInterval(()=>{
    display.innerHTML = ++counter;
  }, 1000)
})

stopBtn.addEventListener('click', () => {
  // gestione bottoni
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(timer);
})