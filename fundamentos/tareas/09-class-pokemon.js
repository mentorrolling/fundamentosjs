class Pokemon {
  constructor(nombre, tipo, evoluciones = []) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.evoluciones = evoluciones;
  }
  atacar() {
    return `${this.nombre} Está atacando`;
  }

  evolucionar(evolucion = 0) {
    const Evo = this.evoluciones[evolucion];
    let mensaje = "No puede evolucionar";

    if (Evo) {
      mensaje = `${this.nombre} está evolucionando a ${Evo}`;
      this.nombre = Evo;
    }

    return mensaje;
  }
}

let charmander = new Pokemon("Charmander", "Fuego", ["Charmeleon", "Charizar"]);
