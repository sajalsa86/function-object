//(advanced) while and for loop break and continue
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 6) {
//         break;
//     }
//     i++;
// }


// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i > 6) {
//         break;
//     }
// }

// var myArray = [25, 30, 35, 40, 45, 50, 55, 60];

// for (var i = 0; i < myArray.length; i++) {
//     var result = myArray[i];
//     console.log(result);
//     if (result > 45) {
//         break;
//     }
// }

//continue
var numbers = [25, 30, 40, 60, 70, 98, 101, 50, 10];
for (var n = 0; n < numbers.length; n++) {
    var number = numbers[n];
    if (number >= 70) {
        continue;
    }
    console.log(number);
}