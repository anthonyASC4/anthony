// TASK
// Create a rand() function
// takes a number
// Returnsa random number betwen 0 and that number

// PSEUDOCODE
// Multiply Math.random() by the given number
// remove the decimal part
// return the remaining integer

function rand (num) {
    // returns a random integer between 0 and num 
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}

console.log(rand(6));
console.log(rand(1000));
console.log(rand(2));
console.log(rand(0));