function isSpringSeason(month, day) {
  return (month === 3 && day >= 20) || 
         (month === 4) || 
         (month === 5) || 
         (month === 6 && day <= 20);
}


const month = parseInt(process.argv[2]); 
const day = parseInt(process.argv[3]);   

console.log(isSpringSeason(month, day));
