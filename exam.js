//day 5
/*
let a = 23;
console.log(a);
console.log(typeof a);
let hasPassport = true;
console.log(hasPassport);

// day 6 data conversion
let a = true;
console.log(a);
console.log(typeof a);
let b = String(a);
console.log(b);
console.log(typeof b);

// to convert string that has number and word to number you will use parseInt()
let a = "123Tap";
console.log(a);
console.log(typeof a);
let b = parseInt(a);
console.log(b);
console.log(typeof b);

// boolean to number false is 0, true is 1
let a = false;
console.log(a);
console.log(typeof a);
let b = Number(a);
console.log(b);
console.log(typeof b);  

let a = " ";
console.log(a);
console.log(typeof a);
let b = Boolean(a);
console.log(b);
console.log(typeof b);

// day 7 comparison operators
let age = 20;
console.log(age == 25);

let userName = "anu";
let enter_userName = "kilo";
console.log(userName == enter_userName);

console.log(5 == true);

// Null and undefined
console.log(null == undefined);
console.log(null === undefined);

// Empty string and zero
console.log("" == 0);
console.log("" === 0);

//Null and false
console.log(null == false);

// undefined and zero
console.log(undefined == 0);

// NaN comparison
console.log(NaN == NaN);

//string and boolean
console.log("true" == true);
console.log("false" == false);

// string number and number
console.log("001" == 1);
console.log("010" == 10);

// day 8 if else
let age = 19;
if (age >= 19) {
  console.log("you are allowed");
} else {
  console.log("you are not allowed");
}

// bank examples
let balance = 1000;
let withdrawAmount = 1100;
if (balance >= withdrawAmount) {
  console.log("transaction successful");
} else {
  console.log("transaction failed");
}

// if, else, else if

let userRole = "role";

if (userRole == "admin") {
  console.log("Full Access granted");
} else if (userRole == "editor") {
  console.log("editor access granted");
} else if (userRole == "author") {
  console.log("author access granted");
} else (userRole == "student") {
  console.log("student access granted");
}


// switch case
let userRole = "student";

switch (userRole) {
  case "admin":
    console.log("Full Access granted");
    break;
  case "editor":
    console.log("editor access granted");
    break;
  case "author":
    console.log("author access granted");
    break;
  case "student":
    console.log("student access granted");
    break;
  default:
    console.log("no access granted");
}

// exam 2
let day = 5;

switch (day) {
  case 0:
  case 6:
    console.log("Happy Weekend");
    break;
  case 1:
    console.log("Happy Monday");
    break;
  case 2:
  case 3:
  case 4:
    console.log("Happy Midweek");
    break;
  case 5:
    console.log("TGIF");
}

// Ternary operator
// syntax: condition ? expressionIfTrue : expressionIfFalse;

let age = 20;
let message;

if (age >= 18) {
  message = "Can Vote";
} else {
  message = "Cannot Vote";
}
console.log(message);

let age = 22;
let message;
message = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(message);

// loops day 10
// for loop
for (let i = 1; i < 5; i++) {
  console.log("*");
}

// while loop
let i = 1;
while (i <= 10) {
  console.log("*");
  i++;
}
  
// do while loop
let i = 1;
do {
  console.log("*");
  i++;
} while (i <= 10); 


//day 11 mastering loops
let i;
let row;
row = "";
for (i = 1; i <= 10; i++) {
  row = row + "*";
}
console.log(row);

// nested loop
let i;
let j;
let row;
for (let i = 1; i <= 5; i++) {
  row = "";
  for (j = 1; j <= 10; j++) {
    row = row + "*";
  }
  console.log(row);
}
  
// day 12
// first pattern
let i;
let j;
let row;
let n = 11;
for (let i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      row = row + "*";
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}
// second pattern
let i;
let j;
let row;
let n = 11;
for (let i = 0; i <= n; i++) {
  row = "";
  for (j = 0; j <= n; j++) {
    if (
      i == 0 ||
      i == n - 1 ||
      j == 0 ||
      j == n - 1 ||
      j == Math.floor(n / 2) ||
      i == Math.floor(n / 2) ||
      i == j ||
      i + j == n - 1 ||
      i + j == Math.floor(n / 2) ||
      i - j == Math.floor(n / 2) ||
      j - i == Math.floor(n / 2) ||
      i + j == n - 1 + Math.floor(n / 2) ||
      j - i == Math.floor(n / 2)
    ) {
      row = row + "*";
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}

// day 13 functions & // day 14 
// no input and no output
let a = 100;
let b = 200;

function add() {
  let c;
  c = a + b;
  console.log(c);
}
add();

// no input and output
let a = 100;
let b = 200;

function add() {
  let c;
  c = a + b;
  return c;
}
let result = add();
console.log(result);

// input and no output
function add(a, b) {
  let c;
  c = a + b;
  console.log(c);
}
let a = 100;
let b = 200;
add(a, b);

// input and output
function add(a, b) {
  let c;
  c = a + b;
  return c;
}
let a = 100;
let b = 200;
let result = add(a, b);
console.log(result);

// day 15
// without function
let student1Marks = 10;
let student1MaxMarks = 100;
let student1Percentage = (student1Marks / student1MaxMarks) * 100;
let student1Grade;
if (student1Percentage >= 90) {
  student1Grade = "A";
} else if (student1Percentage >= 80) {
  student1Grade = "B";
} else if (student1Percentage >= 70) {
  student1Grade = "C";
} else if (student1Percentage >= 60) {
  student1Grade = "D";
} else {
  student1Grade = "F";
}
console.log(student1Grade);

// with function input and output
function calGrade(student1Marks, student1MaxMarks) {
  let student1Percentage = (student1Marks / student1MaxMarks) * 100;
  let student1Grade;
  if (student1Percentage >= 90) {
    student1Grade = "A";
  } else if (student1Percentage >= 80) {
    student1Grade = "B";
  } else if (student1Percentage >= 70) {
    student1Grade = "C";
  } else if (student1Percentage >= 60) {
    student1Grade = "D";
  } else {
    student1Grade = "F";
  }
  return student1Grade;
}
let student1Marks = 12;
let student1MaxMarks = 100;
let result = calGrade(student1Marks, student1MaxMarks);
console.log(result);

// with function input and no output
function calGrade(student1Marks, student1MaxMarks) {
  let student1Percentage = (student1Marks / student1MaxMarks) * 100;
  let student1Grade;
  if (student1Percentage >= 90) {
    student1Grade = "A";
  } else if (student1Percentage >= 80) {
    student1Grade = "B";
  } else if (student1Percentage >= 70) {
    student1Grade = "C";
  } else if (student1Percentage >= 60) {
    student1Grade = "D";
  } else {
    student1Grade = "F";
  }
  console.log(student1Grade);
}
let student1Marks = 92;
let student1MaxMarks = 100;
calGrade(student1Marks, student1MaxMarks);

// with function no input and output
let student1Marks = 12;
let student1MaxMarks = 100;
function calGrade() {
  let student1Percentage = (student1Marks / student1MaxMarks) * 100;
  let student1Grade;
  if (student1Percentage >= 90) {
    student1Grade = "A";
  } else if (student1Percentage >= 80) {
    student1Grade = "B";
  } else if (student1Percentage >= 70) {
    student1Grade = "C";
  } else if (student1Percentage >= 60) {
    student1Grade = "D";
  } else {
    student1Grade = "F";
  }
  return student1Grade;
}

let result = calGrade(student1Marks, student1MaxMarks);
console.log(result);

// day 16
// function declaration
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// function expression
let fun = function (a, b) {
  return a + b;
};
console.log(fun(10, 10));
// arrow function
let arrowFun = (a, b) => {
  return a + b;
};
console.log(arrowFun(10, 40));

// arrow function with only one body
let add = (a, b) => a + b;
console.log(add(10, 50));

// iife - immediately invoked function expression
(function () {
  console.log("This is an IIFE");
})();

// Day 17 hoisting
var a;
console.log(a);
a = 100;
console.log(a);

let a;
console.log(a);
a = 100;
console.log(a);

function greet() {
  console.log("hello");
}
greet();

// day 18 scope
// global scope
let a = 100;
console.log(a);
function fun() {
  console.log(a);
}
fun();

// function scope
function fun() {
  let a = 100;
  console.log(a);
}
fun();
console.log(a);

// Block scope 18;02
let temp = 30;
if (temp > 25) {
  let coolingTemp = temp - 25;
  console.log("Server room needs cooled by", coolingTemp);
} else {
  let heatingTemp = 25 - temp;
  console.log("Server room needs heated by", heatingTemp);
}
console.log(temp);
console.log(coolingTemp);
console.log(heatingTemp);

// Hoisting happens in block scope when we use var keyword, var is function scoped and not block scoped, so it gets hoisted to the top of the function or global scope, but let and const are block scoped and do not get hoisted, so they will throw an error if we try to access them before they are declared.

let temp = 30;
if (temp > 25) {
  var coolingTemp = temp - 25;
  console.log("Server room needs cooled by", coolingTemp);
} else {
  var heatingTemp = 25 - temp;
  console.log("Server room needs heated by", heatingTemp);
}
console.log(temp);
console.log(coolingTemp);
console.log(heatingTemp);

function printTillNumber(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
  console.log("Final value of i = ", i);
}
printTillNumber(5);


function printTillNumber(num) {
  for (var i = 1; i <= num; i++) {
    console.log(i);
  }
  console.log("Final value of i = ", i);
}
printTillNumber(5);

// day 19 objects oriented programming
// ways of  recreating objects

let a = {
  name: "BMW",
  cost: 1000000,
  mileage: 15,

  start: function () {
    console.log("Car is starting");
  },
  stop: function () {
    console.log("Car is stopping");
  },
  accelerate: function () {
    console.log("Car is accelerating");
  },
};
console.log(a.name);
console.log(a.cost);
a.start();
a.stop();

// class work
let student = {
  name: "Anu",
  grade: "A",
  age: 20,

  code: function () {
    console.log("coding");
  },
  sing: function () {
    console.log("singing");
  },
  dance: function () {
    console.log("dancing");
  },
};
console.log(student.name);
console.log(student.grade);
console.log(student.age);
student.code();
student.sing();
student.dance();

// day 20 pass by value and pass by reference
// pass by value
let a = 10;
console.log(a);
let b;
b = a;
b = 20;
console.log(a);
console.log(b);
// by reference

let c1 = {
  name: "BMW",
  cost: 1000000,
  mileage: 15,
};
console.log(c1.name);
console.log(c1.cost);
console.log(c1.mileage);

let c2;
c2 = c1;

c2.name = "Audi";
console.log(c2.name);
console.log(c1.name);

// day 21 functions as first class citizens
function exmp(car) {
  console.log(car);
}
let c1 = {
  name: "Anu",
  grade: "A",
  age: 20,
};
exmp(c1);

// returning a function from a function
function exmp(car) {
  let c1 = {
    name: "Anu",
    grade: "A",
    age: 20,
  };
  return c1;
}
console.log(exmp());

function add1(a, b) {
  console.log(a + b);
}
add1(10, 20);
let add2;
add2 = add1;
add2(30, 40);

// higher order function - a function that takes another function as an argument or returns a function as a result
function exmp(fun) {
  fun(10, 20);
}
// call back function - a function that is passed as an argument to another function and is executed after some operation is completed
function add(a, b) {
  console.log(a + b);
}
exmp(add);
add(10, 20);

// day 22 scope chain
let userName = "Anu";
let userRole = "Admin";

function checkAccess() {
  let hasAccess = false;
  if (userRole === "Admin") {
    let welcomeMsg = `${userName} You have admin privileges!`;
    hasAccess = true;
    console.log(welcomeMsg);
  }
  console.log("Has Access:", hasAccess);
  // console.log(welcomeMsg); // This will cause an error because welcomeMsg is block-scoped
}
// console.log(welcomeMsg); // This will cause an error because welcomeMsg is block-scoped
checkAccess();

// example 2
let firstName = "Anu";
function outerFunction() {
  let outerVar = "From outerFunction";

  function innerFunction() {
    let innerVar = "From innerFunction";
    console.log(innerVar); // Accessing innerVar from innerFunction
    console.log(outerVar); // Accessing outerVar from innerFunction
    console.log(firstName); // Accessing firstName from innerFunction
  }
  // console.log(innerVar); // This will cause an error because innerVar is not accessible in outerFunction
  innerFunction();
}
// console.log(innerVar); // This will cause an error because innerVar is not accessible in the global scope
outerFunction();

// example 3
let city = "New York";
function showWeather() {
  let temperature = 18;
  if (temperature < 20) {
    let jacketNeeded = true;
    console.log(
      `In ${city}, the temperature is ${temperature}°C. Jacket needed: ${jacketNeeded}`,
    );
    console.log(`Do you want to need a jacket? ${jacketNeeded}`);
  }
  // console.log(jacketNeeded); // This will cause an error because jacketNeeded is block-scoped
}
function greet() {
  console.log(`Welcome to ${city}!`);
}
showWeather();
greet();

// day 23 closure
function fun1() {
  console.log("inside fun1");
  function fun2() {
    console.log("inside fun2");
  }
  return fun2;
}
exmp = fun1();
exmp();

function outerfun() {

  let outerVar = 10; //lexical scope
  function innerfun() {
    console.log("outerVAr:", outerVar);
  }
  return innerfun;
}
exmp = outerfun();
exmp();

function outerfun() {
  console.log("outerfun is starting");
  let outerVar = 10; //lexical scope
  function innerfun() {
    console.log("outerfun is starting");
    console.log("outerVAr:", outerVar);
    console.log("outerfun is finishing");
  }
  console.log("outerfun is finishing");
  return innerfun;
}
exmp = outerfun();
exmp();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
let counterA = createCounter();
counterA(); // Output: 1
counterA(); // Output: 2

let counterB = createCounter();
counterB(); // Output: 1
counterB(); // Output: 2

// day 24 Call back function
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
console.log(add(10, 20));
console.log(sub(10, 20));
console.log(mul(10, 20));

// adding call back function
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function calc(a, b, callback) {
  return callback(a, b);
}
console.log(calc(10, 20, add));
console.log(calc(10, 20, sub));
console.log(calc(10, 20, mul));

// exam 2
function circleArea(radius) {
  return Math.PI * radius * radius;
}
function squareArea(side) {
  return side * side;
}
function equilateralTriangleArea(side) {
  return (Math.sqrt(3) / 4) * side * side;
}

function calculateArea(value, callback) {
  console.log(callback(value));
}
calculateArea(5, equilateralTriangleArea);

// day 25 array
// can store any data type in an array
let arr = ["Moyin", 5, 6.9, true];
console.log(arr[0]);
console.log(arr);

// array constructor
let arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// loop through an array
// for loop - for increasing order
let arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

let i;
for (i = 0; i < 5; i++) {
  console.log(arr[i]);
}

// for loop - for decreasing order
let arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

let i;
for (i = 4; i >= 0; i--) {
  console.log(arr[i]);
}

// for loop - for decreasing order using length property
let arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

let i;
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}


// for loop - for increasing order using length property
let arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

let i;
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

for (let x of arr) {
  console.log(x);
}

// disadvantages- you don't have a lot of control it starts from the first element and ends at the last element, you cannot skip any element, you cannot access the index of the element, you cannot modify the array while iterating it.

//day 26
// adding / removing elements

let ar = [10, 20, 30, 40, 50];
console.log(ar);
ar.push(60); // add element at the end of the array
console.log(ar);
ar.unshift(70); // add element at the beginning of the array
console.log(ar);

let ar = [10, 20, 30, 40, 50];
let x = ar.pop(); // remove element from the end of the array
console.log(x);
console.log(ar);

let y = ar.shift(); // remove element from the beginning of the array
console.log(y);
console.log(ar);

//splice method - to add/remove elements from any position in the array
// syntax: array.splice(start, deleteCount, item1)
let ar = [10, 20, 30, 40, 50];
console.log(ar);
let removed = ar.splice(2, 2);
console.log(removed);
console.log(ar);

let ar = [10, 20, 30, 40, 50];
let removed2 = ar.splice(2, 0, 60); // add 60 at index 2 and remove 0 elements
console.log(removed2);
console.log(ar);

let ar = [10, 20, 30, 40, 50];
let removed3 = ar.splice(2, 1, 70); // remove 1 element at index 2 and add 70 at index 2
console.log(removed3);
console.log(ar);


let ar = [10, 20, 30, 40, 50];
console.log(ar);
let removed4 = ar.splice(2, 2, 60, 70); // remove 2 elements at index 2 and add 60 and 70 at index 2

console.log(removed4);
console.log(ar);

// search for an element
let ar = [10, 20, 30, 40, 50, 30];
console.log(ar);
console.log(ar.lastIndexOf(300)); // returns -1 if element is not found
console.log(ar.indexOf(30)); // returns the index of the first occurrence of the element
console.log(ar.lastIndexOf(30)); // returns the index of the last occurrence of the element
console.log(ar.includes(30)); // returns true if element is found, false otherwise

// array methods with call back function
//eg: sort, filter, map, reduce,find, findIndex, some, every

// map method - to create a new array by applying a function to each element of the original array
let numbers = [1, 4, 9, 16];
function squareRoot(x) {
  return Math.sqrt(x);
}
let result = numbers.map(squareRoot);
console.log(result);
console.log(numbers);

//using arrow function 
let numbers = [1, 4, 9, 16];
let result = numbers.map((x) => Math.sqrt(x));
console.log(result);
console.log(numbers);

// filter method - to create a new array with all elements that pass the test implemented by the provided function
let ages = [32, 15, 19, 12];
function checkage(x) {
  if (x >= 18) {
    return true;
  } else {
    return false;
  }
}
let result = ages.filter(checkage);
console.log(result);
console.log(ages);


// using arrow function
let ages = [32, 15, 19, 12];
let result = ages.filter((x) => {
  if (x > 18) {
    return true;
  } else {
    return false;
  }
});

console.log(result);
console.log(ages);

// reduce method - to execute a reducer function on each element of the array, resulting in a single output value
// syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
let numbers = [1, 4, 9, 16];
let result = numbers.reduce((total, x) => total + x, 0);
console.log(result);
console.log(numbers);

// some method - to test whether at least one element in the array passes the test implemented by the provided function
let score = [85, 72, 90, 67];
let HasGradeA = score.some((x) => x > 85); // returns true if at least one element is greater than 85
console.log(HasGradeA);
// every method - to test whether all elements in the array pass the test implemented by the provided function
let HasPassed = score.every((x) => x > 50); // returns true if all elements are greater than 50
console.log(HasPassed);

// find method - to return the value of the first element in the array that satisfies the provided testing function
let score = [85, 72, 90, 67];
let res = score.find((x) => x > 70); // returns the value of the first element that satisfies the condition
console.log(res);
// findIndex method - to return the index of the first element in the array that satisfies the provided testing function
let res2 = score.findIndex((x) => x > 85); // returns the index of the first element that satisfies the condition
console.log(res2);

// sort method - to sort the elements of an array in place and return the sorted array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort(); // sorts the array in alphabetical order
console.log(fruits);

let numbers = [85, 72, 90, 67];
console.log(numbers);
numbers.sort(); // sorts the array in ascending order
console.log(numbers);

// day 28 dimension of an array
// dimension means the amount of data or information required to access the contents inside an array
let ar = [
  [25, 30, 22],
  [23, 31, 24],
  [26, 30, 20],
];
console.log(ar);
let i;
for (i = 0; i < ar.length; i++) {
  let j;
  for (j = 0; j < ar[0].length; j++) {
    console.log(ar[i][j]);
  }
}

// multi dimensional array
let ar = [
  [
    [50, 70],
    [65, 87],
  ],
  [
    [90, 45],
    [80, 30],
  ],
];
let i;
let j;
let k;
for (i = 0; i < ar.length; i++) {
  for (j = 0; j < ar[i].length; j++) {
    for (k = 0; k < ar[i][j].length; k++) {
      console.log(ar[i][j][k]);
    }
  }
}
*/
