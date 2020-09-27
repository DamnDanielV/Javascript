'use strict'
/**
 * operations - function to show how callback works
 * @param {int} option 
 * @param {int} num1 
 * @param {int} num2 
 * @param {function} show_sum 
 * @param {function} show_res 
 * @param {function} show_div 
 * @param {function} show_mul 
 * @return {int} result of operation
 */
function operations(option, num1, num2, show_sum, show_res, show_div, show_mul) {
    let res;
    switch (option) {
        case 1:
            res = show_sum(num1, num2);
            break;
        case 2:
            res = show_res(num1, num2);
            break;
        case 3:
            res = show_mul(num1, num2);
            break;
        case 4:
            res = show_div(num1, num2);
            break;
        default:
            console.log("incorrect option");
            res = undefined;
            break;
    }
    return res;
}
let n1 = parseInt(prompt("give the first number: "));
let n2 = parseInt(prompt("give the second number: "));
let opt = parseInt(prompt("give an option: "));
console.log(operations(opt, n1, n2, show_sum => {return n1 + n2}, show_res => {return n1 - n2}, show_div => {return n1 / n2}, show_mul => {return n1 * n2}));
