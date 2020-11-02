//Funcion constructora del prototipo
function Persona(nombre, apellido, altura) {
  //this hace referencia al objeto creado e indico que este objeto
  //tendra esos atributos a los cuales le asigno el valor del parametro
  // enviado a la funcion
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

//Para crear una funcion en el prototipo persona
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
  // if (this.altura > 1.8) {
  //   return true;
  // } else {
  //   return false;
  // }
};

// asigno a cada persona el prototipo con los parametros para los atributos
// let pablo = new Persona("Pablo", "Marino", 1.65);
// let fabrizio = new Persona("Fabrizio", "Tonin", 1.9);
// let carlos = new Persona("Carlos", "Sosa", 1.78);

//Clases

class Alumno {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
  ficha() {
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
  }
}

let guadalupe = new Alumno("Guadalupe", "Gimenez", 28);

//Heredar de la clase alumno
class Profesor extends Alumno {
  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
  }
  saludar() {
    console.log(
      `Hola, soy ${this.nombre} ${this.apellido} y seré su profesor/a`
    );
  }
}
