import sqlite3 from "sqlite3";

const SQLite3 = sqlite3.verbose();

const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, function(erro){
    if(erro)
        return console.log("Houve erro de conexão: " + erro.message);
});

export {db};
