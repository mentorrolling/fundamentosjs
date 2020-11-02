// while (condition) {}

let vecesSumar = 10;
let Suma = 0;

while (vecesSumar > 0) {
  Suma += 1;
  vecesSumar -= 1;
  console.log("Suma: " + Suma);
  console.log("VecesSumar: " + vecesSumar);
}

do {
  Suma += 1;
  vecesSumar -= 1;
  console.log("Suma: " + Suma);
  console.log("VecesSumar: " + vecesSumar);
} while (vecesSumar > 10);
