let carrito = [];

let contador = 0;

document.getElementById("contador").innerHTML = contador;

let producto1 = {
  nombre: document.getElementById("prod1_n").innerHTML,
  precio: document.getElementById("prod1_p").innerHTML,
  categoria: document.getElementById("prod1_c").innerHTML,
};
let producto2 = {
  nombre: document.getElementById("prod2_n").innerHTML,
  precio: document.getElementById("prod2_p").innerHTML,
  categoria: document.getElementById("prod2_c").innerHTML,
};
let producto3 = {
  nombre: document.getElementById("prod3_n").innerHTML,
  precio: document.getElementById("prod3_p").innerHTML,
  categoria: document.getElementById("prod3_c").innerHTML,
};
let producto4 = {
  nombre: document.getElementById("prod4_n").innerHTML,
  precio: document.getElementById("prod4_p").innerHTML,
  categoria: document.getElementById("prod4_c").innerHTML,
};
function agregarProducto(pb) {
  contador += 1;
  document.getElementById("contador").innerHTML = contador;
  switch (pb) {
    case 1:
      carrito.push(producto1);
      break;
    case 2:
      carrito.push(producto2);
      break;
    case 3:
      carrito.push(producto3);
      break;
    case 4:
      carrito.push(producto4);
      break;
  }
}
