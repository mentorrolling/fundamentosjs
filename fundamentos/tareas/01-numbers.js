// tarea
//===========
// dado un numero entre 1 y 100
//si es par sacar la raiz cuadrada de dicho numero
// pero el resultado debe tener dos decimales como máximo
//si no es par elevarlo a la potencia 2
// en ambos casos debe aparecer un mensaje en consola
// con las operaciones y el resultado

let numero = Math.round(Math.random() * 100 + 1);

console.log(`El número es ${numero}`);

if (numero % 2 === 0) {
  console.log(
    `La raiz cuadrada de ${numero} es ${Math.sqrt(numero).toFixed(2)}`
  );
} else {
  console.log(
    `El resultado de ${numero} elevado a 2 es ${Math.pow(numero, 2)}`
  );
}
