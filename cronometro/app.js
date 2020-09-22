let hora = 0;
let minuto = 0;
let segundo = 0;

let segundero = "";

function inicializar() {
  document.getElementById("hora").value = "00";
  document.getElementById("minuto").value = "00";
  document.getElementById("segundo").value = "00";
  hora = 0;
  minuto = 0;
  segundo = 0;
}

function iniciar() {
  segundero = setInterval(function () {
    segundo += 1;
    document.getElementById("segundo").value = segundo;
  }, 1000);
}

function detener() {
  clearInterval(segundero);
  inicializar();
}
inicializar();
