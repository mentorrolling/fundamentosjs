let edad = 36;

// edad = edad + 1;

// edad += 1;

edad -= 1;

let numero = 12;
--numero;
++numero;

let peso = 75;

let sandwich = 1;

//Aumenmto a peso el valor de sandwich y se lo asigno
peso += sandwich;

let jugarFutbol = 3;

//resto a peso el valor de jugarFutbol y se lo asigno
peso -= jugarFutbol;

//Tengo valor de vino
let vino = 200.3;
//compro 3 vinos
let carrito = vino * 3;
//Para redondear el valor decimal
carrito = Math.round(vino * 100 * 3) / 100;
// Para que solamente me muestre 2 decimales
// después de la coma debo convertirlo a string y usar
// el método toFixed()
let carritoStr = carrito.toFixed(2);
// Para volverlo a número decimal uso el método parseFloat
// que me transforma el string obtenido anteriormente
carrito = parseFloat(carritoStr);

let pizza = 8;
let personas = 2;

let porcionesDePizzaPorPersona = pizza / personas;

//Math es un objeto global

let raiz = Math.sqrt(16);
let aleatorio = Math.random() * 10;

const tirarDados = () => {
  return Math.round(Math.random() * 10);
};
