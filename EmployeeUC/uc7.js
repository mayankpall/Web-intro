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


let dailyWagesArray = [];

for (let day = 1; day <= NUMBER_OF_WORKING_DAYS; day++) {
    let workType = Math.floor(Math.random() * 3);
    let dailyWage = calculateWage(workType);
    dailyWagesArray.push({ day, wage: dailyWage });
}

// console.log(dailyWagesArray);

let totalWagesUsingForeach = 0;
dailyWagesArray.forEach((entry)=>  totalWagesUsingForeach += entry.wage);
console.log(`Total wages using for each : ${totalWagesUsingForeach}`);

//reduce has two parameters first is accumulator second is value and also we have optional inital value 
let totalWageUsingReduce = dailyWagesArray.reduce((sum,entry) => sum + entry.wage , 0);
console.log(`Total wages using reduce : ${totalWageUsingReduce}`);

dailyWagesArray.map((entry)=> console.log(`Day :${entry.day} , Wage : ${entry.wage}`));


const fullTimeDays = dailyWagesArray.filter(entry => entry.wage === 160).map(entry => entry.day);
console.log("Full time wage of 160 were earned\n",fullTimeDays);

const firstFullTimeWage = dailyWagesArray.find((entry)=>entry.wage === 160 );
console.log(`First full Time day is ${firstFullTimeWage?.day||"Not found"}`);


const allFullTime = dailyWagesArray.every(entry => entry.wage === 160);
console.log(`Is every day's wage Full Time 160? ${allFullTime}`);


const hasPartTime = dailyWagesArray.some(entry => entry.wage === 80);
console.log(`Is there any Part-Time Wage 80? ${hasPartTime}`);


const workedDays = dailyWagesArray.filter(entry => entry.wage > 0).length;
console.log(`Total Days Employee Worked: ${workedDays}`);