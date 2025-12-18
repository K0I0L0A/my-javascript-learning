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
*/
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
