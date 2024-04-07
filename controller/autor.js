const Sqlite3 = require("sqlite3");

module.exports = app => {

  const db = new Sqlite3.Database('banco.db', Sqlite3.OPEN_READWRITE, function(erro){
    if(erro)
        return console.log("Houve erro de conexão: " + erro.message);
  });

  app.get('/autor', (req, res) => 
      db.all("select * from autor", [], function(erro, linhas){
        if(erro)
          return res.status(500).send("Ocorreu erro na consulta: "+erro.message)
        else
          return res.status(200).json(linhas);
      }) 
    );

};
