//Calculate Factorial of a number using for loop

let factValue = 1;

for (let i = 1; i <= 7; i++) {
    //console.log(i);
    factValue = factValue * i;
}
console.log(factValue);

//Recalculate factorial multiple times using a function

function getFactorial(number) {

    let factorial = 1;
    for (let i = 1; i <= number; i++) {

        factorial = factorial * i;

    }
    return factorial;
}

let userInput = 3;
const userOutput = getFactorial(userInput);
console.log(userOutput);

// i can use that function any where and any plase

let myInput = 7;
const myOutput = getFactorial(myInput);
console.log("my factorial output of 7 :", myOutput);

//Factorial using a while loop or a decrementing loop

function sajalGetFactorial(myNumber) {
    let sajalFactorial = 1;
    let n = 1;
    while (n <= myNumber) {
        sajalFactorial = sajalFactorial * n;
        n++;
    }
    return sajalFactorial;
}
let sajalInput = 9;
const sajalOutput = sajalGetFactorial(sajalInput);
console.log("it's my output ", sajalOutput);

//decrementing loop with while

function getfact(number1) {
    let fact = 1;
    let i1 = number1;
    while (i1 >= 1) {
        fact = fact * i1;
        i1--;

    }
    return fact;
}

let inputNumber = 9;
const outputNumber = getfact(inputNumber);
console.log("it's output : ", outputNumber);

//decrementing loop with for

function getFact2(number2) {
    let fact2 = 1;
    for (let i2 = number2; i2 >= 1; i2--) {
        fact2 = fact2 * i2;
    }
    return fact2;
}
let inputNumber2 = 10;
const outputNumber2 = getFact2(inputNumber2);
console.log("Result is : ", outputNumber2);