// Write a program to input two numbers and perform all arithmetic operations.
// Example
// Input
// First number: 10
// Second number: 5
// Output

// Sum = 15
// Difference = 5
// Product = 50
// Quotient = 2
// Modulus = 0

function inputNumbers(num1, num2){
    const sum = (num1 + num2);
    const differencs = (num1 - num2);
    const mult = (num1 * num2);
    const div = (num1 / num2);
    const mod = (num1 % num2);

    console.log('Sum = ' + sum);
    console.log('Difference = ' + differencs);
    console.log('Product = ' + mult);
    console.log('Quotient = ' + div);
    console.log('Modulus = ' + mod);
    
}

inputNumbers(10, 5);
inputNumbers(15, 8)
inputNumbers(30, 5)

