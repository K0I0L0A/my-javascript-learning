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
*/
// iife - immediately invoked function expression
(function () {
  console.log("This is an IIFE");
})();
