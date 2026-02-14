//day 5
/*let a = 23;
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
let enter_userName = "anny";
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
   */

//let user = "anu";
/*if (user == "admin") {
  console.log("Welcome, admin!");
} else if (user == "guest") {
  console.log("Welcome, guest!");
} else if (user == "member") {
  console.log("Welcome, member!");
} else if (user == "moderator") {
  console.log("Welcome, moderator!");
}

switch (user) {
  case "admin":
    console.log("Welcome, admin!");
    break;
  case "guest":
    console.log("Welcome, guest!");
    break;
  case "member":
    console.log("Welcome, member!");
    break;
  case "moderator":
    console.log("Welcome, moderator!");
    break;
  default:
    console.log("not found !");
}
*/
/*
let age = 25;
let message;
 if (age >= 18) {
  message = "can vote";
} else {
  message = "cannot vote";
}
*/
// syntax for ternary operator
/*
condition ? expression1 : expression2

message = age >= 18 ? "can vote" : "cannot vote";
console.log(message);
*/
//let i;
/* for (let i = 1; i <= 5; i++) {
  console.log("*");
i = 1;
while (i <= 5) {
  console.log("*");
  i++;
}

i = 1;
do {
  console.log("*");
  i++;
} while (i <= 5);
let row;
row = "";
row = row + "*";

let i;
let row;
row = "";
for (i = 1; i <= 5; i++) {
  row = row + "*";
}
console.log(row);
let row;
row = "";
row = row + "*"
row = row + "*";
row = row + "*";
console.log(row);

let i;
let j;
let row;
for (i = 1; i <= 5; i++) {
  row = "";
  for (j = 1; j <= 5; j++) {
    row = row + "*";
  }
  console.log(row);
}
  

let i;
let j;
let row;
let n = 5;
for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      row = row + i;
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}


let i;
let j;
let row;
let n = 16;
for (i = 0; i < n; i++) {
  row = "";
  for (j = 0; j < n; j++) {
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

//no input no output function
let a = 100;
let b = 200;
function add() {
  let c;
  c = a + b;
  console.log(c);
}
add();
<<<<<<< HEAD

=======
*/
>>>>>>> 9db82e905b045352c286c2708a4ac4edadff56bb
//no input with output function
let a = 100;
let b = 200;
function add() {
  let c;
  c = a + b;
  return c;
}
let res = add();
console.log(res);
<<<<<<< HEAD

// with input with no output function
function add(x,y)
{
  let c
  c = x + y;
console.log(c)
}
let a = 100;
let b = 200;
add(a,b) 

// with input and output

function add(x,y)
{
  let c
  c = x + y;
return c;
}
let a = 100;
let b = 200;
let res = add(a,b);
console.log(res); 

// DAY 15 how to use the do not repeat principles using function
function calc(student1Marks, student1MaxMarks) {
  let student1Percentage = (student1Marks / student1MaxMarks) * 100;
  let student1Grade;
  if (student1Percentage >= 90) {
    student1Grade = "A";
  } else if (student1Percentage >= 80) {
    student1Grade = "B";
  } else if (student1Percentage >= 70) {
    student1Grade = "c";
  } else if (student1Percentage >= 60) {
    student1Grade = "D";
  } else {
    student1Grade = "F";
  }
  console.log(student1Grade);
}
calc(0, 100);

// day 16  function declaration
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
*/
=======
>>>>>>> 9db82e905b045352c286c2708a4ac4edadff56bb
