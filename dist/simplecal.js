"use strict";
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
console.log(add(1, 5));
console.log(sub(1, 7));
console.log(mul(1, 8));
console.log(division(6, 5));
