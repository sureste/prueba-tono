import moment from 'moment';


 function siguienteLunes() {
    let fechaActual = moment(); // Fecha actual
    let diaSemana = fechaActual.day(); // Día de la semana actual (0-6)
  
    // Sumar días hasta llegar al próximo lunes (1 para lunes, 8 para el próximo lunes)
    let diasHastaLunes = 1 + (7 - diaSemana);
    let siguienteLunes = fechaActual.add(diasHastaLunes, 'days');
  
    // Devolver el siguiente lunes como objeto Moment
    return siguienteLunes
  }


  export const paymentsArray = () =>{
  
    let lunes = siguienteLunes();

    let pagos = []



    for(let i = 0 ; i <=155 ; i++){

        pagos.push({day :lunes.add(i,'week').format('DD-MM-YYYY'), number:i+1})
    }

      return pagos

  }

  let fechaOriginal = moment('2023-02-21');
let fechaNueva = fechaOriginal.add(1, 'week'); // "1" representa la cantidad de semanas a sumar



