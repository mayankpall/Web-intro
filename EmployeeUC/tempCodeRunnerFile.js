function calculateWage(workType) {
  let dailyWage = 0; 

  switch (workType) {
      case 0:
          console.log("Employee did not work today. Wage: $0");
          break;
      case 1:
          dailyWage = PART_TIME_HOURS * WAGE_PER_HOUR;
          break;
      case 2:
          dailyWage = FULL_TIME_HOURS * WAGE_PER_HOUR;
          break;
      default:
          console.log("Invalid work type!");
  }

  return dailyWage;
}

const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NUMBER_OF_WORKING_DAYS = 20;

let totalWages = 0;

for (let i = 0; i < NUMBER_OF_WORKING_DAYS; i++) {
  let workType = Math.floor(Math.random() * 3);
  totalWages += calculateWage(workType);
}

console.log(`Total Monthly Wage: $${totalWages}`);
