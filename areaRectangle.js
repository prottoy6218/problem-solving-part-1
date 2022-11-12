// Write a C program to input length and width of a rectangle and find area of the given rectangle.
// Example
// Input
// Enter length: 5
// Enter width: 10
// Output

// Area of rectangle = 50 sq. units

function inputNumber(length, width){
    const areaRectangle = (length * width);
    console.log("Area of rectangle = " + areaRectangle + " units.");
}

inputNumber(5, 10);