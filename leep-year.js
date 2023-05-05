// Check whether a year is a Leap Year or not
function isLeepYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    }
    else {
        return false;
    }
}

let myYear = 2100;
const isMyleepYear = isLeepYear(myYear);
console.log('Is My Leep Year ', isMyleepYear);


// use that function in other
let herYear = 2024;
const isHerLeepYear = isLeepYear(herYear);
console.log('Is her Leep Year ', isHerLeepYear);