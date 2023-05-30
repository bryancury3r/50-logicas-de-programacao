let soma = 0;

for (let contador = 0; contador <= 10; contador++) {
  let num = parseInt(prompt("digite:"));
  soma += num;
}

let media = soma / 10;

document.write(media);
