// Write a C program to input principle, time and rate (P, T, R) from user and find Simple Interest. 
// Example
// Input
// Enter principle: 1200
// Enter time: 2
// Enter rate: 5.4
// Output

// Simple Interest = 129.600006

function interest(principle, time, rate){
    const simpleInterest = (principle * time * rate) / 100;

    console.log("Simple Interest = " + simpleInterest);
}

interest(1200, 2, 5.4);