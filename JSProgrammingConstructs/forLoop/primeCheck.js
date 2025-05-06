function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}


function printPrimesInRange(start, end) {
  for (let num = start; num <= end; num++) {
      if (isPrime(num)) console.log(num);
  }
}


const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);
printPrimesInRange(start, end);
