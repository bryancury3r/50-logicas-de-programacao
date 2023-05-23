const num = parseInt(prompt("digite um número:"));

for (let contador = 1; contador <= 10; contador++) {
  document.write(`${num} x ${contador} = ${num * contador}<br>`);
}
