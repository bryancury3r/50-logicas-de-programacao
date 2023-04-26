const valor1 = parseInt(prompt("Digite um valor:"));
const valor2 = parseInt(prompt("Digite um valor:"));

if (valor1 > valor2) {
  document.write(`${valor1} é maior que ${valor2}`);
} else if (valor1 < valor2) {
  document.write(`${valor1} é menor que ${valor2}`);
} else {
  document.write(`${valor1} é igual ${valor2}`);
}
