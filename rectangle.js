// Write a program to input length and width of a rectangle and calculate perimeter of the rectangle. 

// Example
// Input
// Enter length: 5
// Enter width: 10
// Output

// Perimeter of rectangle = 30 units

function inputNumber(length, width){
    const rectangle = 2 * (length + width);
    console.log("Perimeter of rectangle = " + rectangle + " units.");
}

inputNumber(5, 10);