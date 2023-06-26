let nombres = [];

function crearNombre() {
  let nombre = prompt("Ingrese un nombre:");

  nombres.push(nombre);

  console.log("Nombre creado: " + nombre);
}

function leerNombres() {
  console.log("Nombres en el array:");

 
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
}

function mostrarNombres() {
  let resultado = "";
  for (let i = 0; i < nombres.length; i++) {
    resultado += nombres[i] + "<br>";
  }

  document.body.innerHTML += resultado;
}

function eliminarNombre() {
  let nombre = prompt("Ingrese el nombre que desea eliminar:");
  let index = nombres.indexOf(nombre);

  if (index !== -1) {
    nombres.splice(index, 1);

    console.log("Nombre eliminado: " + nombre);
  } else {
    console.log("El nombre no se encuentra en el array.");
  }
}
