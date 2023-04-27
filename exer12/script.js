const conta = 25665;

const nameCliente = prompt("Digite seu nome:");
const contaCliente = parseInt(prompt("digite sua conta:"));

if (contaCliente === conta) {
  document.write(
    `Seja bem-vindo ${nameCliente}<br> Sua conta: ${contaCliente}`
  );
} else {
  document.write("conta inválida!");
}

const saldo = parseInt(prompt("Digite seu saldo:"));

const debito = parseInt(prompt("Despesa:"));

const credito = parseInt(prompt("entrada:"));

const saldoAtual = saldo + credito - debito;

if (saldo >= 1) {
  document.write(` Seu saldo é ${saldoAtual}, tá positivo!`);
} else {
  document.write(`Seu saldo é de ${saldoAtual} está negativo`);
}

if (saldoAtual >= 100) {
  document.write(`<br>Você tem R$${saldoAtual} da para pagar a vista `);
} else {
  document.write(
    `Você tem R$${saldoAtual} vai ter que passar o cartao de credito`
  );
}
