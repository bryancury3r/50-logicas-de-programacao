let negativo = 0;

for (let contador = 10; contador >= 1; contador--) {
  let num = parseInt(prompt("digite um número:"));

  if (num <= 0) {
    negativo++;
  }
}

document.write(`Teve na lista ${negativo}`);
