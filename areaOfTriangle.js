// Write a program to input base and height of a triangle and find area of the given triangle.
// Example
// Input
// Enter base of the triangle: 10
// Enter height of the triangle: 15
// Output

// Area of the triangle = 75 sq. units

function areaOfTriangle(base, height){
    const triangle = (1 / 2 * base * height);
    console.log("Area of the triangle = " + triangle + " sq. units")
}

areaOfTriangle(10, 15);