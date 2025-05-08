
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;


let workType = Math.floor(Math.random() * 3); 

let dailyWage;

switch (workType) {
    case 0:
        dailyWage = 0;
        console.log("Employee did not work today. Wage: 0");
        break;
    case 1:
        dailyWage = PART_TIME_HOURS * WAGE_PER_HOUR;
        console.log(`Part Time (${PART_TIME_HOURS} hours). Wage: ${dailyWage}`);
        break;
    case 2:
        dailyWage = FULL_TIME_HOURS * WAGE_PER_HOUR;
        console.log(`Full Time (${FULL_TIME_HOURS} hours). Wage: ${dailyWage}`);
        break;
    default:
        console.log("Invalid work type!");
}
