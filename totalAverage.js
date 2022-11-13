// Write a program to input marks of five subjects of a student and calculate total, average and percentage of all subjects.

// Example
// Input
// Enter marks of five subjects: 95 76 85 90 89
// Output

// Total = 435
// Average = 87
// Percentage = 87.00

function marks(mark1, mark2, mark3, mark4, mark5){
    const totalMarks = (mark1 + mark2 + mark3 + mark4 + mark5);

    const average = totalMarks / 5;

    const percentage = (totalMarks / 500) * 100;

    console.log("Total = " + totalMarks);
    console.log("Average = " + average);
    console.log("Percentage = " + percentage.toFixed(2));
}

marks(95, 76, 85, 90, 89)