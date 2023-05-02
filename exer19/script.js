let valor1 = parseFloat(prompt("digite:"));

let valor2 = parseFloat(prompt("digite:"));

while (valor2 == 0) {
  alert(`Opss, VALOR INVÁLIDO`);
  valor2 = parseFloat(prompt("digite:"));
}

let resultado = valor1 / valor2;

document.write(resultado);
