function isLeapYear(year) {
  if (year < 1000 || year > 9999) {
      return "Invalid Year! Please enter a 4-digit number.";
  }


  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a Leap Year.`;
  } else {
      return `${year} is NOT a Leap Year.`;
  }
}

const year = process.argv[2]; 
console.log(isLeapYear(year));

