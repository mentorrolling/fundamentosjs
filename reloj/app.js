document.getElementById("fecha").innerHTML = "Lunes 21 de Septiembre de 2020";

const reloj = document.getElementById("hora");

let hora = "";
let minuto = "";
let segundo = "";

setInterval(function () {
  hora = new Date().getHours();
  minuto = new Date().getMinutes();
  segundo = new Date().getSeconds();

  reloj.innerHTML = `${hora}:${minuto}:${segundo}`;
}, 1000);

function numeros() {}
