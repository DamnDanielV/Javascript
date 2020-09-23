'use strict'

function imprimir_Alm(cadena) {
    var long = cadena.length - 1;
    var aux = "";
    for (var i = 0; i < long; i++)
        for (var j = 0; j <= i; j++)
            if (aux.length <= long)
                console.log(aux += cadena[j]);
}
var caden = "#######";
imprimir_Alm(caden);
