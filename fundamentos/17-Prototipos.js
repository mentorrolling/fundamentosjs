function Usuarios(nombre, apellido, sexo, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.sexo = sexo;
  this.edad = edad;
  this.altura = altura;
}

Usuarios.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
};

Usuarios.prototype.esAlto = function () {
  if (this.altura >= 1.8) {
    return true;
  } else {
    return false;
  }
};

let alfredo = new Usuarios("Alfredo", "Martinez", "Masculino", 36, 1.7);
let sabrina = new Usuarios("Sabrina", "Perez", "Femenino", 25, 1.65);
let Fabrizio = new Usuarios("Fabrizio", "Tonin", "Masculino", 27, 1.83);
