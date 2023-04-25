const salarioFixo = parseInt(prompt("salario:"));

const carrosVendidos = parseInt(prompt("digite quantos carros vendidos:"));

const comissaoPorCarro = parseInt(prompt("comissao por carro vendido:"));

const totalDeVendas = parseInt(prompt("total de vendas:"));

const resultado =
  salarioFixo + carrosVendidos * comissaoPorCarro + (totalDeVendas * 5) / 100;

document.write(
  `Seu Salario é ${salarioFixo} Foram vendidos ${carrosVendidos} carros, você recebera por cada carro ${comissaoPorCarro}, seu novo salario será de ${resultado}`
);
