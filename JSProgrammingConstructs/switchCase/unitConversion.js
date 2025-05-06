function convertUnits(choice, value) {
  switch (choice) {
      case "1": return `${value} feet = ${value * 12} inches`;
      case "2": return `${value} feet = ${value * 0.3048} meters`;
      case "3": return `${value} inches = ${value / 12} feet`;
      case "4": return `${value} meters = ${value / 0.3048} feet`;
      default: return "Invalid choice";
  }
}


const choice = "1";  
const value = 10;    

console.log(convertUnits(choice, value));
