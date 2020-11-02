let cuenta = {
  titular: "Pablo Marino",
  saldo: 0,
  ingresar(valor = parseFloat(prompt("Ingrese el monto"))) {
    let validacion = this.validar(valor);

    if (validacion) {
      this.saldo += valor;
      console.log(`Se depositó $${valor}`);
      this.informar();
    } else {
      console.error("Debe ingresar un número mayor que cero");
    }
  },
  validar(valor) {
    if (!isNaN(valor) && valor > 0) {
      return true;
    } else {
      return false;
    }
  },
  extraer(valor = parseFloat(prompt("Ingrese el monto"))) {
    let validacion = this.validar(valor);
    if (validacion) {
      if (valor > this.saldo) {
        console.warn("No hay saldo suficiente");
      } else {
        this.saldo -= valor;
        console.log(`Se extrajo $${valor}`);
        this.informar();
      }
    } else {
      console.error("Debe ingresar un número mayor que cero");
    }
  },
  informar() {
    console.log("==========================");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: $${this.saldo}`);
  },
};
