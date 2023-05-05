
//Check even and odd number using function
//% symble k remainder ot modulus bole

// const myNumber = 4;
// const remainder = myNumber % 2;//or
// //console.log(myNumber % 2 == 0);
// console.log(remainder == 0);



function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
let myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

// use that function in other
let herNumber = 1593;
const isHerNumberEven = isEven(herNumber);
console.log('Her even number is : ', isHerNumberEven);

// is odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
let myVlaue = 1591;
const isMyNumberOdd = isOdd(myVlaue);
console.log('is my number odd : ', isMyNumberOdd);

// use that function in other
let herVlaue = 1600;
const isherNumberOdd = isOdd(herVlaue);
console.log('is her number odd : ', isherNumberOdd);