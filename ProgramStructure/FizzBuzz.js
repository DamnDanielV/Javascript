'use strict'

function fizzbuzz() {
    var aux = "";
    for ( let i = 0; i < 101; i++)
    {
        if ((i % 3) == 0 && (i % 5) == 0)
            aux += "FizzBuzz ";
        else if (i % 3 == 0)
            aux += "Buzz ";
        else if (i & 5 == 0)
            aux += "Fizz ";
        else
            aux += i + " ";
    }
    console.log(aux);
}

fizzbuzz();
