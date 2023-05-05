// Function declaration
function startFan() {
    console.log("Thanks for turning that fan");
    console.log("Now i can deep sleep in my room");
}

// call the function
startFan();

//paramitar
// Function declaration
function bringSingara(taka) {
    console.log('Money for singara: ', taka);
    console.log('mama Singara den Plese');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;

}
// call the function
var money = 250;
var singara = bringSingara(money);
console.log("Ai nen Singara ", singara);


//Multiple paramitar
function addtion(num1, num2) {
    console.log("test: ", num1, num2);
    var sum = num1 + num2;
    return sum;
}

var number1 = 45;
var number2 = 50;
var result = addtion(number1, number2);
console.log("My Result is: ", result);

//Subtraction
function subtractionToValue(value1, value2) {
    //console.log("hello world");
    var subtraction = value1 - value2;
    return subtraction;
}

var output = subtractionToValue(100, 50);
console.log("Subtraction Result is: ", output);

//Multiplication
function multiplicationTowValue(price1, price2) {
    var Multiplication = price1 * price2;
    return Multiplication;
}
var p1 = 5;
var p2 = 10;
var myOutput = multiplicationTowValue(p1, p2);
console.log("Multiplication Result is: ", myOutput);
//////////////////////////////////////////////////////
function isMoonUp(moonTime) {
    if (moonTime >= 19 || moonTime <= 5) {
        return true;
    }
    return false;
}

let timeVlue = 1;
const moonstatus = isMoonUp(timeVlue);
console.log(moonstatus);