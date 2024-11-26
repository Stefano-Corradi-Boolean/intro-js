


const printClock = () => {
  const d = new Date();
  const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

  document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;
}

printClock();

setInterval(printClock, 1000)