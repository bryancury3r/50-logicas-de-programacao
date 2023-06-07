const numAlunos = parseFloat(prompt("Quantos alunos na sala de aula:"));

let contador = 1;

let soma = 0;

while (contador <= numAlunos) {
  let notaAlunos = parseFloat(prompt("Sua Nota:"));
  contador++;
  soma += notaAlunos;
}

let media = soma / numAlunos;
document.write(media);
