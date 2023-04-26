const nota1 = parseInt(prompt("digita primeira nota:"));

const nota2 = parseInt(prompt("digita segunda nota:"));

const media = (nota1 + nota2) / 2;

if (media >= 7) {
  document.write(`Aprovado!`);
} else {
  document.write("reprovado");
}
