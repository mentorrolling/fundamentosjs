//Obtener las vocales de una palabra

let palabra = "onomatopeya";

function extraerVocal(palabra) {
  let vocales = [];
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra.substr(i, 1).toLowerCase();

    switch (letra) {
      case "a":
        vocales.push(letra);
        break;
      case "e":
        vocales.push(letra);
        break;
      case "i":
        vocales.push(letra);
        break;
      case "o":
        vocales.push(letra);
        break;
      case "u":
        vocales.push(letra);
        break;
    }
  }
  console.log(`La palabra ${palabra} tiene ${vocales.length} vocales`);
  console.log(vocales);
}

extraerVocal(palabra);
