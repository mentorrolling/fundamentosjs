// let persona = {
//     nombre: 'Guadalupe',
//     altura: 1.7,
//     sexo:'Femenino'
// }

// function Persona(nombre, altura, sexo) {
//   this.nombre = nombre;
//   this.altura = altura;
//   this.sexo = sexo;
// }

// class Persona {
//   constructor(nombre, altura, sexo) {
//     this.nombre = nombre;
//     this.altura = altura;
//     this.sexo = sexo;
//   }
//   saludar() {
//     console.log(`Hola, soy ${this.nombre}`);
//   }
// }

// let guadalupe = new Persona("Guadalupe", 1.7, "Femenino");
// let fabrizio = new Persona("Fabrizio", 1.8, "Masculino");

// class Desarrollador extends Persona {
//   constructor(nombre, altura, sexo) {
//     super(nombre, altura, sexo);
//   }
//   saludar() {
//     console.log(`Hola, soy ${this.nombre} y soy desarrollador/a`);
//   }
// }

// let franco = new Desarrollador("Franco", 1.65, "Masculino");

class Usuario {
  constructor(nombre, email, password, estado = true) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.estado = estado;
  }

  get ficha() {
    console.log("-------------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    console.log(`Activo: ${this.estado}`);
  }
}

let belen = new Usuario("belen", "belen@example.com", "12345678");
let lean = new Usuario("Lean", "leanwinner@rolling.com", "mimamammemima");

class Administrador extends Usuario {
  constructor(nombre, email, password, estado = true, experiencia) {
    super(nombre, email, password, estado);
    this.experiencia = experiencia;
  }
  set cambiarEstado(usuario) {
    return (usuario.estado = !usuario.estado);
  }
}

let carlos = new Administrador(
  "carlos",
  "carlos@ransonwer.com",
  "12345678",
  true,
  "2 años"
);
