// Write a C program to input number of days from user and convert it to years, weeks and days.
// Example
// Input
// Enter days: 373
// Output

// 373 days = 1 year/s, 1 week/s and 1 days

function inputDays(day){
    const years = (day / 365);
    const weeks = (day % 365) / 7;
    const days = day - ((parseInt(years) * 365) + (parseInt(weeks) * 7));

    console.log(parseInt(years) + " year/s");
    console.log(parseInt(weeks) + " week/s");
    console.log(parseInt(days) + " day/s")
}

inputDays(373);