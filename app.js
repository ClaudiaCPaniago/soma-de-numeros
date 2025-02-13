function somarNumeros() {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    let valor = document.getElementById(`num${i}`).value;
    let numero = parseFloat(valor);

    if (isNaN(numero)) {
      document.getElementById("resultado").textContent =
        "Por favor, preencha todos os campos com números válidos.";
      return;
    }

    soma += numero;
  }

  document.getElementById(
    "resultado"
  ).textContent = `A soma total dos números é: ${soma}`;
}
