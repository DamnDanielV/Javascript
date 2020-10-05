'use strict'
/**
 * reduce - function to sum an array of numbers
 * @param {list} array: array of numbers
 * @param {function} combine: function to sum two numbers
 * @param {int} start: value to initialize the add
 */
function reduce(array, combine, start) {
    let current = start;
    for (let element of array)
        current = combine(current, element);
    return current;
}
let nums = [1, 2, 3, 4, 5, 6];
console.log(reduce(nums, (a, b) => a + b, 0));