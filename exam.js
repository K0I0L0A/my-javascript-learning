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
*/
let i;
let row;
row = "";
for (i = 1; i <= 5; i++) {
  row = row + "*";
}
console.log(row);
