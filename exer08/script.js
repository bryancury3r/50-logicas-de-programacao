const valor = parseInt(prompt("digite um valor:"));

if (valor > 10) {
  document.write(`O valor ${valor} é maior que 10`);
} else if (valor === 10) {
  document.write(`O valor ${valor} é igual a 10`);
} else {
  document.write(`O valor ${valor} é menor que 10`);
}
