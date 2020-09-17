if (screen.width === 360) {
  console.log("El ancho es de 360");
}

// setInterval(function () {
//   console.log("Esto es un Intervalo de 3 seg");
// }, 3000);

let segundero = 0;
let inicio;

function playSegundero() {
  console.log((segundero += 1));
}

function comienzo() {
  inicio = setInterval(playSegundero, 1000);
}
// setInterval(playSegundero, 1000);
function detener() {
  segundero = 0;
  clearInterval(inicio);
}

// setTimeout(function () {
//   console.log("Soy un mensaje :)");
// }, 6000);

// let usuarios = [
//   { id: 1, nombre: "jose", email: "jose@gmail.com" },
//   { id: 2, nombre: "alberto", email: "alberto@gmail.com" },
//   { id: 3, nombre: "mari ", email: "maria@gmail.com" },
// ];

// console.log("Loading...");
// setTimeout(function () {
//   usuarios.map(function (item) {
//     console.log(item.nombre);
//     console.log(item.email);
//   });
// }, 6000);

console.log("Inicio de programa");

setTimeout(function () {
  console.log("Soy el primer timeout");
}, 3000);
setTimeout(function () {
  console.log("Soy el segundo timeout");
}, 0);
setTimeout(function () {
  console.log("Soy el tercero timeout");
}, 0);

console.log("Fin de programa");
