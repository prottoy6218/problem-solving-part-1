// Write a program to input principle (amount), time and rate (P, T, R) and find Compound Interest.

// Example
// Input
// Enter principle (amount): 1200
// Enter time: 2
// Enter rate: 5.4
// Output

// Compound Interest = 1333.099243

function interest(principle, time, rate){

    const compoundInterest = principle * Math.pow((1 + rate / 100), time);

    console.log("Compound Interest = " + compoundInterest);
}

interest(1200, 2, 5.4);