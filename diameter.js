// Write a program to input radius of a circle from user and find diameter, circumference and area of the circle.
// Example
// Input
// Enter radius: 10
// Output

// Diameter = 20 units
// Circumference = 62.79 units
// Area = 314 sq. units

function inputNumber(radius){
    const pi = 3.14;

    const diameter = (radius * 2);
    const circumference = (2 * pi * radius);
    const area = (pi * radius * radius);

    console.log("Diameter = ", + diameter + " units.");
    console.log("Circumference = ", + circumference.toFixed(2) + " units.");
    console.log("Area = ", + area + " sq. units.")
}

inputNumber(10);