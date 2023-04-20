const totalEleitores = parseInt(prompt("quantos eleitores:"));

const votoBranco = parseInt(prompt("quantidades de votos brancos:"));

const votoValido = parseInt(prompt("votos validos:"));

const votoNulo = parseInt(prompt("votos nulos:"));

const percentualVotosBrancos = (votoBranco * 100) / totalEleitores;
const percentualVotosValidos = (votoValido * 100) / totalEleitores;
const percentualVotosNulos = (votoNulo * 100) / totalEleitores;

document.write(
  `Votos Brancos: ${percentualVotosBrancos}% votos válidos: ${percentualVotosValidos}% votos Nulos: ${percentualVotosNulos}%`
);
