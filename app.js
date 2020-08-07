var a=parseInt(prompt("Ingresa un numero y te dire el mes"));
mes(a);
function mes(a){
  switch(a){
    case 1:
      document.write('El mes es Enero');
      break;
    case 2:
      document.write('El mes es Febrero');
      break;
    case 3:
      document.write('El mes es Marzo');
      break;
    case 4:
      document.write("El mes es Abril");
      break;
    case 5:
      document.write("El mes es Mayo");
      break;
    case 6:
      document.write("El mes es Junio");
      break;
    case 7:
      document.write("El mes es Julio");
      break;
    case 8:
      document.write("El mes es Agosto");
      break;
    case 9:
      document.write("El mes es Septiembre");
      break;
    case 10:
      document.write("El mes es Octubre");
      break;
    case 11:
      document.write("El mes es Noviembre");
      break;
    case 12:
      document.write("El mes es Diciembre");
      break;
    default:
      document.write("No pertenece a ningun mes");
  }
}
