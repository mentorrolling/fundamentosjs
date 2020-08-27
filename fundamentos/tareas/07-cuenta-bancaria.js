/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "José Pagador".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, 
pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y 
volver a mostrar la descripción del estado de la cuenta.
 */

let cuenta = {
  titular: "José Pagador",
  saldo: 0,
  informar() {
    console.log(`DATOS DE LA CUENTA BANCARIA`);
    console.log(`---------------------------`);
    console.log(`Nombre del Titular: ${this.titular}`);
    console.log(`Saldo de cuenta: $${this.saldo}`);
  },
  ingresar: function (
    monto = parseInt(prompt("Ingrese el monto que va a depositar"))
  ) {
    if (monto && monto > 0) {
      this.saldo += monto;
      console.log(`Se ingresó $${monto} a la cuenta`);
      this.informar();
    } else {
      console.error("Debes ingresar un dato valido");
    }
  },
  validar: function (valor) {
    if (!isNaN(valor) && valor > 0) {
      return true;
    } else {
      return false;
    }
  },

  extraer: function (
    monto = parseInt(prompt("Ingrese el monto que desea extraer:"))
  ) {
    if (monto && monto <= this.saldo && monto > 0) {
      this.saldo = this.saldo - monto;
      this.informar();
    } else if (monto <= 0) {
      console.log(`Se debe ingresar un monto mayor a 0`);
    } else if (monto > this.saldo) {
      console.log("El monto es superior al saldo disponible para extraer");
    }
  },
};
