let edad = 36;

// edad = edad + 1;

// edad += 1;

edad -= 1;

let numero = 12;
numero--;
numero++;

let peso = 75;

let sandwich = 1;

peso += sandwich;

let jugarFutbol = 3;

peso -= jugarFutbol;

let vino = 200.3;
let carrito = vino * 3;
carrito = Math.round(vino * 100 * 3) / 100;
let carritoStr = carrito.toFixed(2);

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
