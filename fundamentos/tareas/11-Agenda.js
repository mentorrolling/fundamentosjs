class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

let agenda = [];

let pablo = new Contacto("Pablo Marino", 3815387426);
let fabrizio = new Contacto("Fabrizio Tonin", 3815263987);
let daniela = new Contacto("Daniela Escandar", 3815342759);
let franco = new Contacto("Franco Ricci", 3815632417);

let memo = 3;

function agendaLlena() {
  if (agenda.length === memo) {
    return true;
  } else {
    return false;
  }
}

function existeContacto(contacto) {
  let resultado = agenda.find(function (contac) {
    return contac.nombre === contacto.nombre;
  });
  if (resultado) {
    return true;
  } else {
    return false;
  }
}

const aniadirContacto = function (contacto) {
  let conteo = agendaLlena();
  if (!conteo) {
    let existe = existeContacto(contacto);
    if (!existe) {
      agenda.push(contacto);
    } else {
      console.warn("El contacto ya existe");
    }
  } else {
    console.warn("Agenda llena");
  }
};

function huecoLibre() {
  //cuanto espacio de memoria me queda
}

function listarContactos() {
  //una lista de todos los contactos
}

function buscarContacto(nombre) {
  //si encuentra el nombre devolver el telefono
}

function eliminarContacto(contacto) {
  //verificar si el contacto existe
  //si existe preguntar si está seguro que quiere borrar
  //eliminar el contacto de la agenda
}
