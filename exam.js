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

// if, else, else if

let userRole = "admin";

if (userRole == "admin") {
  console.log("Full Acccess granted");
} else if (userRole == "editor") {
  console.log("editor access granted");
} else if (userRole == "author") {
  console.log("author access granted");
} else {
  console.log("student access granted");
}

// day 9 switch case
