// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}


function getPalindrome(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}


function checkPalindromePrime(num) {
  if (!isPrime(num)) return `${num} is NOT prime.`;

  let palindrome = getPalindrome(num);
  return isPrime(palindrome) ? `${num} and its palindrome ${palindrome} are BOTH prime.` 
                             : `${num} is prime, but its palindrome ${palindrome} is NOT.`;
}


const num = parseInt(process.argv[2]); 
console.log(checkPalindromePrime(num));
