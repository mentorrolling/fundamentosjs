// let nombre = prompt("Ingrese su nombre");
// if (nombre === null) {
//   console.log("Debe ingresar un valor");
// } else {
//   console.log(`El nombre ingresado es: ${nombre}`);
// }

//

// let numero = parseInt(prompt("Ingrese un número"));
// let numero2 = parseInt(prompt("Ingrese otro número"));

// console.log(numero + numero2);

//tarea
//Ingresar dos numeros
//validar que sean numeros
//si alguno de los campos queda
//vacio igualar el campo a 0

//devolver en un alert el valor
//de los numeros restados.

// let valor = prompt("ingrese un numero");
// let nuevovalor = parseInt(valor);
// if (isNaN(nuevovalor)) {
//   console.log("No ingreso un numero");
// } else {
//   console.log(nuevovalor);
// }
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));

if (isNaN(numero1)) {
  numero1 = 0;
}
if (isNaN(numero2)) {
  numero2 = 0;
}
alert(`El resultado de la resta de los números es ${numero1 - numero2}`);
