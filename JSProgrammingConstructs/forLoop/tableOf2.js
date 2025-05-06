function powersOfTwo(n) {
  for (let i = 0; i <= n; i++) {
      console.log(`2^${i} = ${Math.pow(2, i)}`);
  }
}


const n = parseInt(process.argv[2]);
powersOfTwo(n);
