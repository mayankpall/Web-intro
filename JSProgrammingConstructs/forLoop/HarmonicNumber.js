function harmonicNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += 1 / i;
  }
  console.log(`Harmonic Number ${n} = ${sum}`);
}


const n = parseInt(process.argv[2]);
harmonicNumber(n);
