console.log('ajax');

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/boolean';

// chiamata tramite fetch()
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    // risposta asincrona 
    console.log('sono asincrono');
    console.log(data);  
  })
  .catch(error => {
    console.log(error);
  })

  /// JSON.parse()
  const jsonString = '{ "name":"John", "age":30, "city":"New York"}';
  // trasformo la stringa JSON in oggetto JavaSctipt
  const obj = JSON.parse(jsonString)

  console.log(jsonString.name); // undefined
  console.log(obj.name); // Jhon
  

  
  // chiamata tramite axios (importato tramite CDN)
  axios.get(endpoint)
  .then(response => {
    // il corpo della risposta è sempre dentro response.data
    console.log('sono asincrono');
    // dietro le quinte axios esegue il JSON.parse() della risposta restituendoci direttamente l'oggett JS
    console.log('axios',response.data);
  })
  .catch(error => {
    console.log(error);
  })
  
  console.log('ciao sono sincrono');

