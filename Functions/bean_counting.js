'use strict'
/**
 * count_char - finds a character in a string
 * @param {string} stri : string to be parser
 * @param {char} ch : char to be found in the string
 * @return {int} : how many times is the cahracter in the string
 */
function count_char(stri, ch) {
    let c_ch = 0;
    for (let i = 0; i < stri.length; i++)
        if (stri == ch)
            c_ch += 1;
    return c_ch;
}