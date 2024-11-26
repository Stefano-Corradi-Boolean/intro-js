
const message = document.getElementById('message');
const progressBar = document.querySelector('.progress-bar');
const uploadBtn = document.getElementById('upload-button');


uploadBtn.addEventListener('click', () => {
  // disabilito il bottone e cambio il testo
  uploadBtn.disabled = true;
  uploadBtn.innerHTML = 'Uploding...';

  // inizializzo il valore di incremento percentuale e reparo la stringa in percentuale
  let progress = 0;
  let percentageValue = progress + '%';

  //imposto il claore della progerss bar come stile e testo
  printProgerssBar()

  const interval = setInterval(() =>{
    // ad ogni iterazione incremento progress
    percentageValue = ++progress + '%';
    // lo stampo i pagine
    printProgerssBar(percentageValue);
    if(progress === 100){
      // al raggiungimento del 100% interrmpo l'interval
      clearInterval(interval)
      // nascondo il bottone
      uploadBtn.classList.add('d-none')
      // mostro il messaggio
      message.classList.remove('d-none')
    }
  }, 100)
})

function printProgerssBar(percentageValue){
  progressBar.innerText = percentageValue;
  progressBar.style.width = percentageValue;
}