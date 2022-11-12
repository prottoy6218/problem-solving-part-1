// Write a C program to input two numbers from user and calculate their sum.
// Example
// Input
// Input first number: 20
// Input second number: 10
// Output
// Sum = 30

function addNumbers(num1, num2){
    const sum = (num1 + num2);
    return ('Sum = ' + sum);
}

const result = addNumbers(20, 10);
console.log(result);