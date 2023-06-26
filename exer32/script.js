let x = 0;

for (let i = 1; i <= 10; i++) {
  document.write(`-------------<br>`);
  for (let j = 1; j <= 10; j++) {
    x = i * j;
    document.write(`${i} x ${j} = ${x}<br>`);
  }
}
