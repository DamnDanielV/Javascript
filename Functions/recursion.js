'use strict'
/**
 * find_solution - function to find a sequence of additions and multiplications
 *                 that produces a number (target)
 * @param {int} target number to be reached
 * return: the sequence
 */
function find_solution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        }
        else if (current > target) {
            return null;
        }
        else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(find_solution(24));