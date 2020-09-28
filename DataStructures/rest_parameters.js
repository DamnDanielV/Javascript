'use strict'
/**
 * max - function to find the max number using rest parameters
 * @param  {...any} numbers: list of numbers
 * @return {int} maximum number
 */
function max(...numbers) {
    let result = -Infinity;
    for (let num of numbers) {
        if (num > result)
            result = num;
    }
    return (result);
}

console.log(max(1, 6, 8, "srt", 65, 34, 1));

let words = ["hello", "world"];

let wor = ["Javascript", ...words, "is amazing!"];

console.log(wor);
