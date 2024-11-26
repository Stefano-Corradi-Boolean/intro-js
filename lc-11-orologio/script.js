

const display = document.getElementById('display');
let seconds = 10;

display.innerHTML = seconds--;

const intervalId = setInterval(function(){

  display.innerHTML = seconds;
  if(seconds === 0){
    clearInterval(intervalId);
    display.innerHTML = 'Buon anno!';
    confetti({particleCount:1000, spread: 360 })
  }
  seconds--;

},1000)