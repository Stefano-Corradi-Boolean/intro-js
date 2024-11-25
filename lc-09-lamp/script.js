/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
**BONUS**
Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
- Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
*/


const toggleLampBtnEL = document.getElementById('toggle-lamp-btn');


// let isLampOn = false;

// toggleLampBtnEL.addEventListener('click', () => {
//   const lampEL = document.getElementById('lamp');

//   if(!isLampOn){
//     lampEL.src = 'img/yellow_lamp.png';
//     toggleLampBtnEL.innerHTML = 'Spegni'
//   }else {
//     lampEL.src = 'img/white_lamp.png';
//     toggleLampBtnEL.innerHTML = 'Accendi'
//   }

//   isLampOn = !isLampOn

// })

toggleLampBtnEL.addEventListener('click', () => {
  const lampEL = document.getElementById('lamp');
  if(lampEL.src.includes('img/white_lamp.png')){
    lampEL.src = 'img/yellow_lamp.png';
    toggleLampBtnEL.innerHTML = 'Spegni'
  }else{
    lampEL.src = 'img/white_lamp.png';
    toggleLampBtnEL.innerHTML = 'Accendi'
  }
})
