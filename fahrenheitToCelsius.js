// Write a C program to input temperature in degree Fahrenheit and convert it to degree Centigrade.

// Example
// Input
// Temperature in fahrenheit = 205
// Output

// Temperature in celsius = 96.11 C

function temperature(fahrenheit){
    const celsius = (fahrenheit - 32) * 5 / 9;

    console.log("Temperature in celsius = " + celsius.toFixed(2) + " c");
}

temperature(205);