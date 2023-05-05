//Unit Convert Inch to Feet, 
// basic example
let dadaInches = 180;
const dadaFeet = dadaInches / 12;
console.log(dadaFeet);

let dadiInches = 168;
const dadiFeet = dadiInches / 12;
console.log(dadiFeet);

//best way to Convert Inch to Feet
// avabe korle bar bar korte hoina ekta result bohu jaigai use kora jai
function inchesToFeet(inches) {
    const convertVeet = inches / 12;
    return convertVeet;
}

let myInches = 132;
const resultFeet = inchesToFeet(myInches);
console.log('My inches to feet is : ', resultFeet);

let nanInches = 120;
const nanaFeet = inchesToFeet(nanInches);
console.log('My nana Feet is : ', nanaFeet);


//miles to kilometer
function mileToKilometer(miles) {
    const converkilometer = miles * 1.60934;
    return converkilometer;
}

let myMiles = 5;
const resultKM = mileToKilometer(myMiles);
console.log('My miles to KM is : ', resultKM, 'kilo');

//celcius to farenheit
// 1 celcius = 33.8 farenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Example usage:
let inputCelsius = 25;
const outputfahrenheit = celsiusToFahrenheit(inputCelsius);
console.log(inputCelsius + " degrees Celsius is equal to " + outputfahrenheit + " degrees Fahrenheit.");
