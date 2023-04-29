const quantidadeMax = parseInt(prompt("digite a quantidade maxima:"));

const quantidadeMin = parseInt(prompt("digite a quantidade minima:"));

const quantidadeAtual = parseInt(prompt("digite a quantidade atual:"));

const quantidadeMedia = quantidadeMax + quantidadeMin / 2;

if (quantidadeAtual >= quantidadeMedia) {
  document.write("nao efetuar compra");
} else {
  document.write("efetuar compra");
}
