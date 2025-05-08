const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NUMBER_OF_WORKING_DAYS = 20;


function calculateWage(workType) {
    switch (workType) {
        case 0: return 0; 
        case 1: return PART_TIME_HOURS * WAGE_PER_HOUR; 
        case 2: return FULL_TIME_HOURS * WAGE_PER_HOUR; 
        default: return 0;
    }
}


let dailyWageMap = new Map();

for (let day = 1; day <= NUMBER_OF_WORKING_DAYS; day++) {
    let workType = Math.floor(Math.random() * 3);
    let dailyWage = calculateWage(workType);
    dailyWageMap.set(day, dailyWage); 
}


let totalWage = 0;
dailyWageMap.forEach(wage => totalWage += wage);

console.log("Daily Wages Map:", dailyWageMap);
console.log(`Total Monthly Wage using Map: ${totalWage}`);
