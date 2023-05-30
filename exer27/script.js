contador = 0;
contadorDentro = 0;
contadorFora = 0;

while (contador <= 5 - 1) {
  let num = parseInt(prompt("digite:"));
  contador++;

  if (num >= 10 && num <= 20) {
    contadorDentro++;
  } else {
    contadorFora++;
  }
}

document.write(`dentro ${contadorDentro} <br>`);
document.write(`fora ${contadorFora} <br>`);
document.write(`contador ${contador}`);
