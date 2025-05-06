function convertTemperature(value, unit) {
  switch (unit.toLowerCase()) {
      case "c":
          if (value < 0 || value > 100) return "Out of valid range ";
          return `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
      
      case "f":
          if (value < 32 || value > 212) return "Out of valid range";
          return `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
      
      default:
          return "Invalid unit!";
  }
}

console.log(convertTemperature(25, "C"));  
console.log(convertTemperature(80, "F")); 
