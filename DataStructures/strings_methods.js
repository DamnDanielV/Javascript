'use strict'

var text1 = "fluir no significa que usted no tenga que hacer nada";
var text2 = "significa tomar acción según las pistas que le va entregando el alma";
var text3 = "        okay \n";
var textcom;
var num1 = 17;

console.log(num1.toString()); //convertir a string
console.log(text1.toUpperCase()); //convertir a mayusculas
console.log(text2.toLowerCase()); //a minusculas
console.log(text1.slice(9, 19)); // divide una cadena entre los parametros dados
console.log(text2.indexOf("ic")); // busca un string o char dentro de un string(retorna el indice donde se encuentra)

console.log("trim method:", text3.trim()); // elimina espacios, saltos de linea al final y el inicio de un string

console.log(String(num1).padStart(4, "0")); //padStart toma una longuitud y un string y lo añade al inicio de uan cadena

let text_s = (text1.split(" ")); //divide un string en un caracter dado y retorna una lista
console.log(text_s);

console.log(text_s.join(". ")); // une una lista con un string dado como paremetro y devuelve una cadena

console.log(text3.trim().repeat(4)); // repite una cadena un numero de veces
textcom = text1.concat(" " + text2);
console.log(textcom);
