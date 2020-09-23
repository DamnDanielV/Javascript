'use strict'
/**
 * @param {int} factor is the number to be multiplied
 * @return {int} number : arrow function that returns a product
 */
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2); //twice is the closure
console.log(twice(5));
