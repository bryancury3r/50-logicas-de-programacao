let valor1 = parseFloat(prompt("digite:"));

let valor2 = parseFloat(prompt("digite:"));

while (valor2 == 0) {
  valor2 = parseInt(prompt("digite:"));
}
resultado = valor1 / valor2;

document.write(resultado);
