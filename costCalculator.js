function budgetCalculator(watch, phone, laptop) {
    var watchCost = watch * 50;
    var phoneCost = phone * 400;
    var laptopCost = laptop * 900;


    return [watchCost + phoneCost + laptopCost];
}

var Items = budgetCalculator(10, 10, 20);

console.log(Items);