const valorA = parseInt(prompt("digite:"));

const valorB = parseInt(prompt("digite:"));

const valorC = parseInt(prompt("digite:"));

if (
  valorA < valorB + valorC &&
  valorB < valorA + valorC &&
  valorC < valorB + valorA
) {
  document.write(`temos um triângulo`);
} else {
  document.write(`não forma triangulo`);
}
