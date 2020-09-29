'use strict'
/**
 * reverseArray - Function to reverse an array without change itself
 * @param {array} array to be reversed
 * @returns {array} a new array reversed
 */
function reverseArray(array) {
    var new_array = [];
    for (let i = array.length - 1; i >= 0; i--) {
        new_array.push(array[i]);
    }
    return (new_array)
}
/**
 * ReverseArrayInPlace - function to reverse an array modifying itself
 * @param {array} array of numbers to be reversed
 * @returns {array} the array reversed
 */
function ReverseArrayInPlace(array) {
    for (let i = 0; i <= Math.floor(array.length / 2); i++) {
        let prev = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length -1 - i] = prev;
        debugger;
    }
    return array;
}
var array = [1, 2, 3, 4, 5, 6];

ReverseArray(array);
console.log(array);
ReverseArrayInPlace(array);
console.log(array);
