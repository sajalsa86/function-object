console.log("welcome");
// 1. Variable
// number variable
var num = 10;
// String variable
var name = "Sajal Hossain";
// boolean variable
var result = true;

// Object variable
var today = new Date();
//console.log(today);

// 2. array
// number array
var myNumber = [2, 4, 6, 8, 10, 12];
var toKnowIndex = myNumber.indexOf(6);
var toKnowItem = myNumber[3];
var toKnowLength = myNumber.length
myNumber.push(14);
myNumber.pop();
//console.log(toKnowItem);
// string array
var familydName = ["Sajal", "Akashi", "Chumki", "Samiha"];
familydName.push("Suchi");
familydName.pop("Suchi");
//edit name
familydName[2] = "Chumki Hatun";
console.log(familydName);

// 3. Conditional

if (familydName.length == 5) {
    console.log("Sajal Akashi and Chumki");
}

else if (familydName.length == myNumber.length) {
    console.log("number array and name array not equal");
}
else if (familydName[1] == "Akashi") {
    console.log("My waif name is akashi");
}

else {
    console.log("Thanks for learning")
}

// 4. Loop
// basic while loop
var num = 0; //loop variable
while (num < 5) {
    //console.log(num);
    num++
}

// basic for loop

for (number1 = 0; number1 < 5; number1 += 1) {
    //console.log(number1);
}

//for loop with array
var myArray = [2, 4, 6, 8, 10];

myArray.push(12);
for (var i = 0; i < myArray.length; i++) {
    var container = myArray[i];
    console.log(container);
}