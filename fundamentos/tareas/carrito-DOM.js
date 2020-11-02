let carrito = ["BANANA", "BICI", "GALLETAS"];

let tproducto = document.getElementById("textprod");
let tcontenido = document.getElementById("contenido");

function addCarrito() {
  let producto = tproducto.value;
  if (producto) {
    tcontenido.value = "";
    tproducto.value = "";
    tcontenido.value = `Se agregó ${producto.toUpperCase()} al carrito`;
    return carrito.push(producto.toUpperCase());
  }
}

function listarProductos() {
  tcontenido.value = `Lista de productos del carrito\n===================\n`;
  carrito.map(function (producto) {
    tcontenido.value += `*${producto.toUpperCase()}\n`;
    // console.log(producto.toUpperCase());
  });
}

function buscarProducto(producto = tproducto.value) {
  tcontenido.value = "";
  if (producto) {
    let resultado = carrito.find(function (produc) {
      return produc === producto.toUpperCase();
    });
    if (resultado) {
      tcontenido.value = `El producto ${producto.toUpperCase()} está en el carrito`;
      // console.log(`El producto ${producto.toUpperCase()} está en el carrito`);
    } else {
      tcontenido.value = `No se encuentra el producto`;
      // console.warn(`No se encuentra el producto`);
    }
  } else {
    tcontenido.value = " No se ingreso ningún producto";
    // console.log(" No se ingreso ningún producto");
  }
}

function filtrarProductos(producto = tproducto.value) {
  tcontenido.value = "";
  if (producto) {
    let resultado = carrito.filter(function (produc) {
      //   El método indexOf() retorna el primer índice en el que se puede encontrar
      //   un elemento dado en el array, ó retorna - 1 si el elemento no esta presente.
      return produc.indexOf(producto.toUpperCase()) > -1;
    });
    if (resultado.length > 0) {
      resultado.map(function (produc) {
        tcontenido.value += `${produc.toUpperCase()}\n`;
      });

      // console.table(resultado);
    } else {
      tcontenido.value = "No hay resultados para esta busqueda";
      // console.warn("No hay resultados para esta busqueda");
    }
  }
}

function quitarProducto(producto = tproducto.value) {
  tcontenido.value = "";
  if (producto) {
    let index = carrito.indexOf(producto.toUpperCase());

    if (index != -1) {
      carrito.splice(index, 1);
      tcontenido.value = `Se eliminó ${producto.toUpperCase()} del carrito`;

      // console.log(`Se eliminó ${producto.toUpperCase()} del carrito`);
    } else {
      tcontenido.value = "El producto no existe en el carrito";
      // console.warn("El producto no existe en el carrito");
    }
  }
}

// let parr = document.getElementById("parrafo");
// let contenido = document.getElementById("textprod");

// function cambiar() {
//   parr.innerHTML = contenido.value;
//   // console.log("Parrafo: " + parr.innerHTML);
//   // console.log("input: " + contenido.value);
// }

// contenido.addEventListener("keyup", cambiar, false);
