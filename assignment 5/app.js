// Q1: Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log("Q1:", squareNumbers([1, 2, 3, 4]));


// Q2: Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.
function filterAdults(users) {
    return users.filter(user => user.age > 18);
}
const usersList = [
    { name: "Ali", age: 16 },
    { name: "Ahmed", age: 22 },
    { name: "Sara", age: 19 }
];
console.log("Q2:", filterAdults(usersList));


// Q3: Given an array of products with price, use reduce to calculate the total price of all products.
const products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Jeans", price: 1000 }
];
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Q3: Total Price =", totalPrice);


// Q4: Create an array of students with marks. Sort the array in descending order based on marks.
const students = [
    { name: "Ali", marks: 75 },
    { name: "Bilal", marks: 90 },
    { name: "Zain", marks: 82 }
];
students.sort((a, b) => b.marks - a.marks);
console.log("Q4:", students);


// Q5: Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.
function findLongString(strings) {
    return strings.find(str => str.length > 5);
}
console.log("Q5:", findLongString(["cat", "elephant", "dog", "giraffe"]));


// Q6: Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword. Explain how this works in this context.
const person = {
    firstName: "Muhammad",
    lastName: "Ali",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log("Q6:", person.fullName());
// Explanation: In this context, 'this' refers to the object ('person') that is calling the method, allowing access to its properties.


// Q7: What will be the output of this code and why? Create an example to show the difference between regular function and arrow function when using this inside an object.
const obj = {
    name: "JS Object",
    regularFunc: function() {
        return this.name; // 'this' points to obj
    },
    arrowFunc: () => {
        return this.name; // 'this' points to outer scope (undefined or global)
    }
};
console.log("Q7 Regular:", obj.regularFunc());
console.log("Q7 Arrow:", obj.arrowFunc());


// Q8: Write a function that takes an array of numbers, filters even numbers, then doubles them using map, and finally returns the sum of those doubled numbers using reduce. Do it in a chain.
function processNumbers(numbers) {
    return numbers
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((sum, n) => sum + n, 0);
}
console.log("Q8:", processNumbers([1, 2, 3, 4, 5, 6]));


// Q9: Create an array of employees with name, department and salary. Write code to find HR employee and sort by salary ascending.
const employees = [
    { name: "Bilal", department: "IT", salary: 50000 },
    { name: "Ayesha", department: "HR", salary: 40000 },
    { name: "Usman", department: "Sales", salary: 30000 }
];
// a) Find HR employee
const hrEmployee = employees.find(emp => emp.department === "HR");
console.log("Q9a:", hrEmployee);
// b) Sort by salary in ascending order
const sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Q9b:", sortedEmployees);


// Q10: Create a function that takes an object and returns an array of its keys and values separately, then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.
const sampleObj = { id: 1, title: "Developer", active: true };
console.log("Q10 Keys:", Object.keys(sampleObj));
console.log("Q10 Values:", Object.values(sampleObj));

const keyValuePairs = [["name", "Ali"], ["age", 20]];
const newObject = Object.fromEntries(keyValuePairs);
console.log("Q10 New Object:", newObject);