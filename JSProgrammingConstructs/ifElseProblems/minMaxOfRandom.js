let randomNumber = [];

for(let i = 0; i < 5; i++){
  randomNumber.push(Math.floor(Math.random()*900)+ 100);
}

let minNumber = Math.min(...randomNumber);
let maxNumber = Math.max(...randomNumber);

console.log("Random numbers : " + randomNumber);
console.log("Minimum number : " + minNumber);
console.log("Maximum number : " + maxNumber);