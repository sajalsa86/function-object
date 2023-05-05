//Declare multiple objects with multiple properties

var student1 = {
    firstName: 'Sajal',
    lastName: 'Hossain',
    roll: 521299,
    collage: 'Naogaon Polytechnik',
    subject: "Computer",
    Phone: 01746233086
}

var mobile = {
    color: 'blue',
    display: '8inc',
    price: 15000,
    storage: '16gb',
    model: 'realme'
}

var book = {
    title: 'Muhammad(s) life',
    author: 'abbas ali khan',
    page: 250,
    language: 'bangla',
    price: '150taka'
}

//multiple ways to get and set object property
// ami jodi object variable er print ba output dekhte chai
console.log(mobile);
// ami jodi object variable er single kono item dekhte chai
// three way
console.log("my phone Price is: ", mobile.price);

console.log("Book language is: ", book["language"]);

var bookPrice = "price";
console.log("Book price is: ", book[bookPrice]);

// ami jodi object variable er single kono item value update korte chai
// ruls, i ave three way
//1.
mobile.price = 14000;
//console.log(mobile);
//2.
mobile['color'] = 'silver';
//console.log(mobile);
//3.
var phoneStorage = 'storage';
mobile[phoneStorage] = '32gb';
console.log(mobile);
