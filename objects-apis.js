/*
 * Objects, Interfaces, and API's
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function (typeofBark){
        console.log("Bark!");
    },
};

// Example: passing by value and reference

function x(y) {
    y = y + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);
