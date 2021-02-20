// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fiboIterative(num) {
    var fibo = [2, 3];
    for (var i = 2; i <= num; i++) {
        var newFibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(newFibo);

    }
    return fibo;
}

var result = fiboIterative(24);
console.log(result);