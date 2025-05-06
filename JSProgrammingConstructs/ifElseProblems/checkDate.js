function isSpringSeason(month, day) {
  return (month === 3 && day >= 20) || 
         (month === 4) || 
         (month === 5) || 
         (month === 6 && day <= 20);
}

// Example usage:
const month = parseInt(process.argv[2]); // Read month from command-line
const day = parseInt(process.argv[3]);   // Read day from command-line

console.log(isSpringSeason(month, day));
