const valor1 = parseInt(prompt("primeiro valor:"));

const valor2 = parseInt(prompt("segundo valor:"));

const valor3 = parseInt(prompt("terceiro valor:"));

if (valor1 > valor2 && valor1 > valor3) {
  document.write(`valor ${valor1} é maior`);
} else if (valor2 > valor3 && valor2 > valor1) {
  document.write(`valor ${valor2} é maior`);
} else {
  document.write(`valor ${valor3} é maior`);
}
