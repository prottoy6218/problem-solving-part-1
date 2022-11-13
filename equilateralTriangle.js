// Write a C program to input side of an equilateral triangle from user and find area of the given triangle. 
// Example
// Input

// Enter side of the equilateral triangle: 10
// Output

// Area of equilateral triangle = 43.3 sq. units

function equilateralTriangle(num){
    const areaEquilateral = ((Math.sqrt(3) / 4) * (num * num));
    console.log("Area of equilateral triangle = " + areaEquilateral.toFixed(2) + " sq. units");
}

equilateralTriangle(10);