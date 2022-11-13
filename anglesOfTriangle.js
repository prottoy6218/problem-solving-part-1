// Write a Program to input two angles from user and find third angle of the triangle.
// ExampleInput
// Enter first angle: 60
// Enter second angle: 80
// Output

// Third angle = 40

function angles(firstAngle, secondAngle){
    const thirdAngle = 180 - (firstAngle + secondAngle);
    console.log("Third angle = " + thirdAngle);
}

angles(60, 80);

