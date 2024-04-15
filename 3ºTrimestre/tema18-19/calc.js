let resultado = document.getElementById("resultado");

function agregarNumero(num) {
  resultado.value += num;
}

function limpiar() {
  // por hacer
  resultado.value = resultado.value.slice(0, -1000000);
}

function borrar() {
  resultado.value = resultado.value.slice(0, -1);
}

function operar(op) {
  switch (op) {
    case "raiz":
      try {
        resultado.value = Math.sqrt(eval(resultado.value));
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    case "bin":
      try {
        resultado.value = eval(resultado.value).toString(2);
      } catch (error) {
        resultado.value = "Error";
      }
      break;
    case "reci":
      try {
        resultado.value =  1 / resultado.value;
       }
      
      catch (error) {
        resultado.value = "Error";
      }
    case "cuadrado":
      try {
        resultado.value = resultado.value * resultado.value;
      } catch (error) {
        resultado.value = "Error";
      }
    case "hex":

    default:
      resultado.value += op;
      break;
  }
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Error";
  }
}
