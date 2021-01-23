const year = 2029;
let reminder = year % 4;
if (reminder == 0) {
    console.log("This is leap year");

} else {
    console.log("It's not a leap year");
}