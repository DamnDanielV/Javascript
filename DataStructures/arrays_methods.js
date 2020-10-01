'use strict'

let list1 = ["Jest", "Javascript", "Json", "REST", "NodeJs"];


// recorrer estructuras arrays

document.write("<h1> Tecnologias web fascinantes:</h1></br>");
document.write("<ul>");
// metodo for
for (let i = 0; i < list1.length; i++) {
    document.write("<li>" + list1[i] + "</li>");
}
document.write("</ul>");

// metodo forEach con callback y funcion flecha
document.write("<ul>");
list1.forEach((element) => {document.write("<li>" + element + "</li>")});
document.write("</ul>");

// metodo for in
document.write("<ul>");
for (let elemento in list1) {
    document.write("<li>" + list1[elemento] + "</li>");
}
document.write("</ul>");

// añadir elemento a un array
do {
    var elemento = (prompt("Indica otra tecnologia:"));
    list1.push(elemento);
} while (elemento != "");

list1.pop();
console.log(list1);


//eliminar un elemento de un array en una posicion dada

let indice = list1.indexOf("REST"); //busca el indice del elemento a borrar
if (indice != -1) { // indexOf retorna -1 si no se encuentra el elemento
    list1.splice(indice, 1); //splice elimina desde un indice en adelante (1 para indicar que solo elimine ese elemento)
}
console.log(list1);

// busquedas

var search = list1.find(elemento => elemento == "NodeJs"); //metodo find con callback retorna el elemento o undefined
console.log(search);
var search2 = list1.findIndex(elemento => elemento == "NodeJs"); //metodo findIndex con callback retorna el indice o -1
console.log(search2);
// convertir un array a string
 let list_str = list1.join();
 console.log (list_str);

 // convertir string a un array

console.log(list_str.split(","));

//otros metodos

console.log(list1.sort()); // ordena un array alfabeticamente
console.log(list1.sort().reverse()); // reverse an array
