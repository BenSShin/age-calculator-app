document.addEventListener("DOMContentLoaded", () => {
  const inputDay = document.querySelector("#day");
  const inputMonth = document.querySelector("#month");
  const inputYear = document.querySelector("#year");

  const button = document.querySelector("#button");

  // button click event
  button.addEventListener("click", function () {
    console.log("test");
    // getting data from input
    let day = inputDay.value;
    let month = inputMonth.value;
    let year = inputYear.value;

    //getting current dates
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();
    console.log(date);
    console.log(currentYear, currentMonth, currentDay);

    // displaying result in result fields
    const outputDay = document.querySelector("#output_days").querySelector("p");
  });
});
