'use strict'
/**
 * range - function to create an array of numbers
 * @param {int} start number to start
 * @param {int} end number to finish
 * @param {int} step step between numbers
 * @return {array} the array of numbers 
 */
function range(start, end, step) {
    var values = [];
    var tmp_s = start, tmp_e = end, tmp_st = Math.abs(step);
    if (step == undefined) step = 1;
    if (start < end && step > 0) {
        for (let i = start; i <= end; i+=step)
            values.push(i);
    }
    if (start > end){
        for (let j = tmp_s; j >= tmp_e; j-=tmp_st) {
            values.push(j);
            debugger;
        }
    }
    return (values);
}
/**
 * sum - function to sum an array of numbers
 * @param {array} numbers array of numbers
 * @returns {int} the sum
 */
function sum(numbers) {
    var sum = 0;
    for (let num of numbers)
        sum += num;
    return (sum);
}
console.log(sum(range(2, 10, 3)));
