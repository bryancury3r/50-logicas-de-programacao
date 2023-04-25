const salarioAtual = parseInt(prompt("digite seu salario:"));

const percentual = parseInt(prompt("digite o percentual:"));

const salarioAjustado = (percentual * salarioAtual) / 100;

const novoSalario = salarioAjustado + salarioAtual;

document.write(`${novoSalario}`);
