let totalEstoque = 0;

let numMercadoria = parseInt(prompt("Qts de itens:"));

for (let i = 1; i <= numMercadoria; i++) {
  let preco = parseFloat(prompt("digite o preço"));

  totalEstoque = totalEstoque + preco;
}

let media = totalEstoque / numMercadoria;

document.write(
  `A media do valor por mercadoria em estoque é de: ${media} O valor total em estoque pe de R$ ${totalEstoque}`
);
