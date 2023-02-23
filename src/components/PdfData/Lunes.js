import moment from 'moment';


function siguienteLunes(fecha) {
  let fechaMoment = moment(fecha, 'YYYY-MM-DD');
  let diasHastaLunes = 1 + (7 - fechaMoment.day());
  let siguienteLunes = fechaMoment.clone().add(diasHastaLunes, 'days');
  return siguienteLunes
}


  export const paymentsArray = (date) =>{
  
    let lunes = siguienteLunes(date);


    let pagos = []



    for(let i = 0 ; i <=155 ; i++){

        pagos.push({day :lunes.add(1,'week').format('DD-MM-YYYY'), number:i+1})
    }

      return pagos

  }

  let fechaOriginal = moment('2023-02-21');
let fechaNueva = fechaOriginal.add(1, 'week'); // "1" representa la cantidad de semanas a sumar



/*const moment = require('moment');

function siguienteLunes() {
  let hoy = moment();
  if (hoy.day() === 1) {
    // Si hoy es lunes, devolver la fecha en formato local de lunes
    return hoy.locale('es').format('LL'); // Se muestra el formato en español local
  } else {
    // Si hoy no es lunes, encontrar la fecha del siguiente lunes
    let diasHastaLunes = 1 + (7 - hoy.day());
    let siguienteLunes = hoy.clone().add(diasHastaLunes, 'days');
    return siguienteLunes.format('LL');
  }
}

console.log(siguienteLunes()); // Muestra la fecha del siguiente lunes en formato "LL"



function convertirAFechaMoment(fecha) {
  let fechaMoment = moment(fecha, 'DD/MM/YYYY');
  return fechaMoment;
}

let fecha = '21/02/2023';
let fechaMoment = convertirAFechaMoment(fecha);
console.log(fechaMoment.format('LL')); // Muestra la fecha en formato "LL"

*/