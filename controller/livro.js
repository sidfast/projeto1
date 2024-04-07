const { json } = require("express");
const Sqlite3 = require("sqlite3");

module.exports = app => 
{
  const db = new Sqlite3.Database('banco.db', Sqlite3.OPEN_READWRITE, function(erro)
  {
    if(erro)
        return console.log("Houve erro de conexão: " + erro.message);
  });

  app.post('/livro', function(req, res) 
  {
    let instrucao = `INSERT INTO livro (titulo, sub_titulo, id_autor, ano, 
       id_categoria, id_editora, nr_paginas, dias_emprestado)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    let reg = req.body;

    db.all(instrucao, 
      [reg.titulo, reg.sub_titulo, 
       reg.id_autor, reg.ano, reg.id_categoria, reg.id_editora,
       reg.nr_paginas, reg.dias_emprestado], 
      function(erro, retorno) 
      {
        if(erro)
          return res.status(500).send("Erro ao inserir livro: "+erro.message)
        else
          return res.status(201).json(retorno);
      });
  });
};
