console.log('axios');


let num;
const enpoint = 'https://flynn.boolean.careers/exercises/api/random/int';

printNumber('Loading...')

axios.get(enpoint)
  .then(response => {
    if(response.data.success){
      // fine loading
      console.log(response.data);
      num = response.data.response;
      printNumber(num)
    }
  })
  .catch(err => {
    // fine loading
    console.log(err);
    printNumber('Errore! ' + err.message)
  })


  function printNumber(n){
    document.getElementById('num').innerHTML = n;
  }






