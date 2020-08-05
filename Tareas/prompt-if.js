let numero = parseFloat(prompt("Ingresa el primer número"));
let numero2 = parseFloat(prompt("Ingresa el siguiente número"));

if (isNaN(numero)) {
  numero = 0;
}
if (isNaN(numero2)) {
  numero2 = 0;
}

console.log(
  `El resultado de restar ${numero} con ${numero2} es ${numero - numero2}`
);
