const valor1 = parseInt(prompt("digite:"));

const valor2 = parseInt(prompt("digite:"));

const valor3 = parseInt(prompt("digite:"));

if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3) {
  document.write(`${valor1} ${valor2} ${valor3}`);
} else if (valor1 > valor3 && valor3 > valor2 && valor1 > valor2) {
  document.write(`${valor1} ${valor3} ${valor2}`);
} else if (valor2 > valor3 && valor2 > valor1 && valor3 > valor1) {
  document.write(`${valor2} ${valor3} ${valor1}`);
} else if (valor2 > valor1 && valor2 > valor3 && valor1 > valor3) {
  document.write(`${valor2} ${valor1} ${valor3}`);
} else {
  document.write(`${valor3} ${valor2} ${valor1}`);
}
