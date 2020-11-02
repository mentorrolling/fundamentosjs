let numero = 40;
let numeroStr = "20";

// if (numero >= 10) {
//   console.log("El numero es mayor o igual que 10");
// } else {
//   console.error("El numero no cumple la condición");
// }

// if (numero === numeroStr) {
//   console.log("Los numeros tienen el mismo valor");
// } else {
//   console.error("Que estás haciendo!");
// }

// if (numero === 10) {
//   console.log("El número es igual a 10");
// } else if (numero > 10) {
//   console.log("El número es mayor que 10");
// } else {
//   console.log("El número es menor que 10");
// }

// if (numero % 2 == 0) {
//   console.log("El número es par");
// }

// let texto = "Hola Javascript";

// if (texto == "Hola") {
//   console.warn('El texto no es igual a "Hola"');
// } else if (texto == "hola javascript") {
//   console.warn('El texto no es igual a "hola javascript"');
// } else {
//   console.error("El texto no es igual a otra cosa");
// }

let a = 20;
let b = 45;

if (a > b) {
  console.log(`La suma entre ${a} y ${b} es igual a ${a + b}`);
} else if (a < b) {
  console.log(`La resta entre ${b} y ${a} es igual a ${b - a}`);
} else {
  console.log(`La multiplicacion entre ${a} y ${b} es igual a ${a * b}`);
}
let edad = 12;
let tutor = false;

if (edad >= 18) {
  console.log("Puede entrar y disfrutar de la fiesta");
} else if (tutor) {
  console.log("Puede acceder por que va acompañado");
} else {
  console.error("No puede disfrutar de la fiesta");
}

let chocolate = false;
let cafe = true;

if (chocolate || cafe) {
  console.warn("No puedo consumir el producto");
} else {
  console.log("Puedo Comer todo lo que quiera");
}
