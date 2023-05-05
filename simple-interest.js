function calculateSimpleInterest(principal, rate, time) {
    var interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage:
let principal = 1000;
let rate = 5; // 5%
let time = 2; // 2 years
const outputInterest = calculateSimpleInterest(principal, rate, time);
console.log("The simple interest on a principal of $" + principal + " at a rate of " + rate + "% for " + time + " years is $" + outputInterest + ".");


