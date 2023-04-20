const anos = parseInt(prompt("digite sua idade:"));

const meses = parseInt(prompt("digite o mes:"));

const dias = parseInt(prompt("digite o dia:"));

const resultado = anos * 365 + meses * 30 + dias;

document.write(`Você já viveu ${resultado} dias`);
