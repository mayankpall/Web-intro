function getWeekday(num) {
  switch(num) {
      case 0: return "Sunday";
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      default: return "Invalid input";
  }
}


const input = parseInt(process.argv[2]); 
console.log(getWeekday(input));
