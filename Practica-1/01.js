function calcular() {
    var numero = parseInt(document.getElementById("numero").value);

  
    var impares = [];
    var sumaPares = 0;
    for (var i = 1; i <= numero; i++) {
      if (i % 2 !== 0) {
        impares.push(i);
      } else {
        sumaPares += i;
      }
    }
    document.getElementById("impares").textContent = "Números impares: " + impares.join(", ");
    document.getElementById("sumaPares").textContent = "Suma de números pares: " + sumaPares;
  }