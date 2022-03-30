/*
 * Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1; // === use to stop the program from covert numbers that not of the same type.

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

// Example 1

let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;
//console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else
        console.log("Their prices are equal.")
}

compareStorePrices(10,5); // This way you dont have to write the above code everytime.
compareStorePrices(7,10);

function squareNum (number) {
    return number * number;
}
let squaredNumber = squareNum(7);
console.log(squaredNumber);

// Example: Scope

let x = 10;

function addNumbers (n,m) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1, 2, 10);

// Example: Array
// Array start at Zero
//         e.g  0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];
console.log(ourArray[0]); // console.log number 1

// (counter; comp; incr)
for(let i = 0; i<5; i++){
    console.log("i is equal to: " + i)
    //console.log(ourArray[i]);
}

console.log("---------------")
console.log("Example: .length")

for(let i = 0; i<ourArray.length; i++){
    console.log("i is equal to: " + i)
    //console.log(ourArray[i]);
}

// We can put ourArray.length outside of the loop
// to reduce the proccess time like so:

// let arrLen = ourArray.length;
// for(let i = 0; i<ourArray.length; i++){
    //console.log("i is equal to: " + i)
    //console.log(ourArray[i]);
//}

// Example: while loop
console.log("----------------")
console.log("Example: while loop")

let y = 0;
while (y < 10) {
    console.log('Ran');
    y = y + 1;
}




