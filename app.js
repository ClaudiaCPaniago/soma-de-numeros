function somarNumeros() {
  let soma = 0;
  for (let i = 0; i <= 4; i++) {
    let valor = document.getElementById(`num${i + 1}`).value;
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
