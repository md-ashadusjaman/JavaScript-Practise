// var num = (prompt("enter a number for check"));

// normal function
// if (num > 0) {
//     console.log("This is the positive");
// } else if (num < 0) {
//     console.log("This is the negative number");
// } else {
//     console.log("this is the zero")
// }

// We can call the abobe function using the ternary condition

var num = (prompt("enter a number for check"));

var result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";

console.log(result);

// we can add more condition like this  "num < 0 ? "negative"