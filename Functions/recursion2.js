'use strict'
/**
 * is_even:  recursive function to know if a number is even or odd
 * @param {int} num : number to be parser
 * return: true or false if is even or odd 
 */
function is_even(num) {
    if (num == 0)
        return true;
    else if (num == 1)
        return false;
    else
        return is_even (num - 2);
}