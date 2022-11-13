// Write a program to input temperature in Centigrade and convert to Fahrenheit.

// Example
// Input
// Enter temperature in Celsius = 100
// Output

// Temperature in Fahrenheit = 212 F

// F = (c * 9 / 5) + 32

function temperature(Celsius){
    const fahrenheit = (Celsius * 9 / 5) + 32;
    console.log("Temperature in Fahrenheit = " + fahrenheit + " F");
}

temperature(100);
temperature(300);