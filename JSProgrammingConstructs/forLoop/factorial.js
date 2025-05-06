function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
      fact *= i;
  }
  console.log(`${n}! = ${fact}`);
}


const n = parseInt(process.argv[2]);
factorial(n);

// var i = 0;
// for( i = 0; i < 6; i++) {
//   setTimeout(() => console.log(i), 1000); 
// }
