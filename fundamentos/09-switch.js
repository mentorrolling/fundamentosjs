let day;
let diaNumero = new Date().getDay();

switch (diaNumero) {
  case 0:
    day = "Hoy es domingo";

    break;
  case 1:
    day = "Hoy es Lunes";

    break;
  case 2:
    day = "Hoy es Martes";

    break;
  case 3:
    day = "Hoy es Miercoles";

    break;
  case 4:
    day = "Hoy es Jueves";

    break;
  case 5:
    day = "Hoy es Viernes";

    break;
  case 6:
    day = "Hoy es Sábado";

    break;
}

//Tarea
let comando = prompt("Ingrese un comando (alert, console, print)");
switch (comando) {
  case "alert":
    alert("El comando ejecuta un alert");

    break;
  case "console":
    console.log("El comando se ejecuta en consola");

    break;
  case "print":
    document.write("El comando ejecuta en el navegador");

    break;

  default:
    console.error("Comando no reconocido");
    break;
}
