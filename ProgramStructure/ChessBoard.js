'use strict'

function chessboard(n) {
    var aux2 = "";
    var pr = 45;
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < n; j++)
        {
            if (i % 2 != 0 && j % 2 == 0)
            {
                aux2 += "# "; 
            }
            else if (i % 2 == 0 && j % 2 != 0)
                aux2 += " #";
        }
        aux2 += "\n";
    }
    console.log(aux2);
}
chessboard(8);