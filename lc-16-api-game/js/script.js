console.log('api gme');
/*

Il programma con una chiamata API ottiene due numeri random da 1 a 6 (tira i dadi)
Al termine decreata il vincitore
https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n
*/

const min = 1;
const max = 6;
const items = 2;
const endpoint = `https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${items}`;

console.log(endpoint);

axios.get(endpoint)
  .then(response => {
    console.log(response.data);
    const numbers = response.data.response;
    const [playerA, playerB] = numbers;
    console.log(playerA, playerB);
    let message = 'Pareggio';
    if(playerA > playerB) message = 'Vince player A';
    else if(playerB > playerA) message = 'Vince player B'

    // compilo i campi
    document.getElementById('plA').innerHTML = playerA
    document.getElementById('plB').innerHTML = playerB
    document.getElementById('message').innerHTML = message


    // termino il loading
    document.getElementById('loading').className = 'd-none'
    document.getElementById('wrapper').className = ''
    
  })
  .catch(error => {
    console.log(error);
    
  })

