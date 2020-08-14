
// palabra reservada function
// El nombre de la funcion 
// los parametros 
// tenemos el codigo

// function saludar(parametros){
//   codigo
// }

// llamamos a la funcion
// valores que recibe

// saludar(valores)


// function saludar(nombre,apellido){
//   alert(`Hola como estas ${nombre} ${apellido}`)
// }

// saludar("Fabrizio", "Tonin");

// let valor = 0

// function sumar(numero){
//   return valor = numero + 5
// }

// funcion anonima

// const saludar = function(){
//   console.log("hola")
// }
// saludar()

//recibir los valores a travez de un promp
// evaluar que los valores recibidos sean numeros
// y si no lo son avisar con un alert


let num1 = parseInt(prompt("mandar tu numero"))
let num2 = parseInt(prompt("mandar tu numero"))


function sumar(num1,num2){
  console.log(`la suma entre ${num1} y ${num2} es igual a ${num1 + num2}`)
}
function restar(num1, num2){
  console.log(`la resta entre ${num1} y ${num2} es igual a ${num1 - num2}`)
}
function multiplicar(num1,num2){
  console.log(`la multiplicar entre ${num1} y ${num2} es igual a ${num1 * num2}`)
}
function dividir(num1, num2){
  console.log(`la division entre ${num1} y ${num2} es igual a ${num1 / num2}`)
}



function resultados(num1,num2){
  sumar(num1,num2)
  restar(num1,num2)