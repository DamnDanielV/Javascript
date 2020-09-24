'use strict'
/**
 * tableFor - searches for an string in a object
 * @param {string} search_event : event to be found
 * @param {object} journal : object with a journal
 * @return {list} table with a frequency
 */
function tableFor(search_event, journal) {
    /* se inicializa table donde:
    table[0] = False - False
    table[1] = True - False
    table[2] = False - True
    table[3] = True - true*/
    let table = [0, 0, 0, 0] 
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(search_event)) // se busca el evento dentro de la lista event
            index += 1; // se indica el indice donde se debe posteriormente aumentar el contador
        if (entry.squirrel) //se busca squirrel dentro del objeto
            index += 2; // se indica el indice donde se debe posteriormente aumentar el contador
        table[index] += 1; // se aumenta el contador de veces acertadas
    }
    return table;
}

/**
 * phi - function to computing statistics correlation
 * @param {list} table : Table with frequencies 
 * @return {float} : phi coefficient
 */
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}

console.log(tableFor("pizza", JOURNAL));
console.log();
console.log(phi(tableFor("pizza", JOURNAL)));
