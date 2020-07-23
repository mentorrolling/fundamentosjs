let numero = 50;
let numero2 = 50;

let resultado = 0;

let persona = "Pablo";

// if (numero >= 10) {
//   console.log("El número es mayor o igual que 10");
// }

// if (numero >= 10) {
//   console.log("El número es mayor o igual que 10");
// } else {
//   console.warn("El número no cumple la condición");
// }

//no es lo mismo === a ==
// if (numero == 10) {
//   console.log("El número es 10");
// } else {
//   console.error("El número no es 10");
// }
if (numero == 10) {
  console.log("El número es 10");
} else if (numero > 10) {
  console.log("El número es mayor que 10");
} else {
  console.log("El número es menor que 10");
}

// if (numero % 2 == 0) {
//   console.log("El número es par");
// } else {
//   console.warn("El número no es par");
// }

let n = "10";
let f = 10;

if (n == f) {
  console.log("n es igual a f");
}
if (n === f) {
  console.log("n  es igual a f");
} else {
  console.log("n no es igual a f");
}

//tarea: condicional que devuelva si un número es impar
//tarea 2: Condicional que tome dos números:
// si el primero es menor que el segundo, haga una suma
//si el primero es mayor que el segundo, que haga una resta
//si el primero es igual al segundo, que haga una multiplicación

//tarea
if (numero % 2 !== 0) {
  console.log("El número es impar");
} else {
  console.warn("El número no es impar");
}

//tarea 2
if (numero < numero2) {
  resultado = numero + numero2;
} else if (numero > numero2) {
  resultado = numero - numero2;
} else if (numero == numero2) {
  resultado = numero * numero2;
}
console.log("El resultado de la operación es " + resultado);

console.log(`El resultado de la operación es ${resultado}`);
