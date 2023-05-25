contador = 0;
contadorDentro = 0;
contadorFora = 0;

while (contador <= 10) {
  let num = parseInt(prompt("digite:"));
  contador++;

  if (num >= 10 && num <= 20) {
    contadorDentro++;
  } else {
    contadorFora++;
  }
}

document.write(`dentro ${contadorDentro}`);
document.write(`fora ${contadorfora}`);
document.write(`contador ${contador}`);
