// var inputDay = document.getElementById("day").value;
// var inputMonth = document.getElementById("month").value;
// var inputYear = document.getElementById("year").value;

//test value inputs day:23, month: 5, year: 2023
let inputDay = 23;
let inputMonth = 8;
let inputYear = 1984;
// test value current day:1, month: 11, year:2023
let currentDay = 1;
let currentMonth = 5;
const currentYear = 2023;

//need to make object to tell how many days are in each month
//make array to pull multiple values?
const dayInMonths = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function dateToTotalDays() {
  var currentTotalDays = currentDay + 365 * currentYear;
  var dayToMonths = 0;
  for (let i = 1; i < ${currentMonth}; index++) {
    dayToMonths += dayInMonths[i];
  }
}

// have to calculate for leap year

// can subtract but if current is less than input
