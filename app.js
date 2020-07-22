//Math es un objeto global
let numero = 12;
numero--;

let raiz = Math.sqrt(16);
let aleatorio = Math.random() * 10;

const tirarDados = () => {
  return Math.round(Math.random() * 10);
};

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
