function hotelCost(totalDate) {

    var day = 800;
    var cost = 0;

    if (day <= 10) {
        var cost = day * 100;

    } else if (day <= 20) {
        var first10 = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = first10 + secondPart;
    } else {
        var first10 = 10 * 100
        secondPart = 10 * 80
        var remaining = day - 20;
        var thiredPart = remaining * 50;
        cost = first10 + secondPart + thiredPart;
    }
    return cost;
}

var totalCost = hotelCost();

console.log(totalCost);