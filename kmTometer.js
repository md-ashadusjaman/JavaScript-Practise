function kilometerToMeter() {

    // taking input from user
    const kilometers = prompt("Enter value in kilometers: ")

    // use prompt or we can use direct value such as 45

    // calculate meter 
    const meter = kilometers * 1000

    return meter;
}

var result = kilometerToMeter();
console.log(result);