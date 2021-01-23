// var factorial = 1;
// for (var i = 1; i <= 20; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

// make a function

// function factorial(anyNumber) {

//     var factorial = 1;
//     for (var i = 1; i <= anyNumber; i++) {
//         factorial = factorial * i;

//     }
//     return factorial;

// }


// var result = factorial(23);
// console.log(result);



// using while loop

// var i = 1;
// var factorial = 1;

// while (i <= 12) {
//     factorial = factorial * i;
//     i++;
//     // console.log(i, factorial); to show the result every loop
// }

// // for showing the final result
// console.log(i, factorial);



// declar function using the while loop

function factorial(num) {
    var i = 1;
    var factorial = 1;

    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var result = factorial(8);
console.log(result);


// node loop-factorial.js