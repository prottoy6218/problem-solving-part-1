// Write a program to input length in centimeter and convert it to meter and kilometer.
// Example
// Input
// Enter length in centimeter = 1000
// Output

// Length in meter = 10 m
// Length in kilometer = 0.01 km

function inputNumber(length){
    // 1m = 100 cm
    // 1km = 100000cm

    const meter = (length / 100);
    const kilometer = (length / 100000);

    console.log("Length in meter = ", meter + " m.");
    console.log("Length in kilometer = " + kilometer + " km.");
}

inputNumber(1000);