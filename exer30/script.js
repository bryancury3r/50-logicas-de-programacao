// Duas formas (FOR / While)

/*let soma = 0;
for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("digite:"));
  soma = soma + num;
}

document.write(`a soma de todos números é: ${soma}`);*/

let soma = 0;

let i = 1;

while (i <= 5) {
  let num = parseInt(prompt("digite:"));
  i++;

  soma = soma + num;
}
document.write(`${soma}`);
