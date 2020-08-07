let n = parseInt(prompt("Ingrese el primer número"));
let n2 = parseInt(prompt("Ingrese el segundo número"));

console.log(n);
console.log(n2);

if (isNaN(n)) {
  n = 0;
}
if (isNaN(n2)) {
  n2 = 0;
}

console.log(`El resultado de restar ${n} con ${n2} es ${n - n2}`);
