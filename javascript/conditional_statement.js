// Q1: Write a program that checks if a number is positive, negative, or zero.
let num1 = 10;
if (num1 > 0) {
    console.log("Q1: Positive number");
} else if (num1 < 0) {
    console.log("Q1: Negative number");
} else {
    console.log("Q1: Zero");
}


// Q2: Even or odd check using if-else statement.
let num2 = 7;
if (num2 % 2 === 0) {
    console.log("Q2: Even number");
} else {
    console.log("Q2: Odd number");
}


// Q3: Largest of two numbers using conditional statements.
let a = 15, b = 25;
if (a > b) {
    console.log("Q3: Larger number is " + a);
} else {
    console.log("Q3: Larger number is " + b);
}


// Q4: Grade evaluation based on a student’s percentage score.
let score = 82;
if (score >= 90) {
    console.log("Q4: Grade A");
} else if (score >= 80) {
    console.log("Q4: Grade B");
} else if (score >= 70) {
    console.log("Q4: Grade C");
} else if (score >= 60) {
    console.log("Q4: Grade D");
} else {
    console.log("Q4: Grade F");
}


// Q5: Leap year check using conditional statements.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Q5: Leap year");
} else {
    console.log("Q5: Not a leap year");
}


// Q6: Day of week switch to print the name of the day.
let dayNumber = 3;
switch (dayNumber) {
    case 1: console.log("Q6: Monday"); break;
    case 2: console.log("Q6: Tuesday"); break;
    case 3: console.log("Q6: Wednesday"); break;
    case 4: console.log("Q6: Thursday"); break;
    case 5: console.log("Q6: Friday"); break;
    case 6: console.log("Q6: Saturday"); break;
    case 7: console.log("Q6: Sunday"); break;
    default: console.log("Q6: Invalid day number");
}


// Q7: Calculator switch performing basic operations based on user input.
let numA = 10, numB = 5;
let operator = "+";
switch (operator) {
    case "+": console.log("Q7: Result = " + (numA + numB)); break;
    case "-": console.log("Q7: Result = " + (numA - numB)); break;
    case "*": console.log("Q7: Result = " + (numA * numB)); break;
    case "/": console.log("Q7: Result = " + (numA / numB)); break;
    default: console.log("Q7: Invalid operator");
}


// Q8: Vowel or consonant check using switch-case.
let char = 'e';
switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Q8: Vowel");
        break;
    default:
        console.log("Q8: Consonant");
}


// Q9: Traffic light system using switch-case.
let lightColor = "Red";
switch (lightColor.toLowerCase()) {
    case "red": console.log("Q9: Stop"); break;
    case "yellow": console.log("Q9: Wait"); break;
    case "green": console.log("Q9: Go"); break;
    default: console.log("Q9: Invalid light color");
}


// Q10: Menu-driven program using switch-case.
let menuChoice = 1;
switch (menuChoice) {
    case 1: console.log("Q10: Check Balance selected"); break;
    case 2: console.log("Q10: Deposit selected"); break;
    case 3: console.log("Q10: Withdraw selected"); break;
    case 4: console.log("Q10: Exit selected"); break;
    default: console.log("Q10: Invalid choice");
}