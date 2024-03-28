// Criando acesso à biblioteca express
const express = require('express');

// Criando acesso para usar o Consign
const consign = require('consign');

// Criando objeto que acesso recursos da express
module.exports = () => {

    const app = express();

    consign()
        .include('controller')
        .into(app);

    return app;
}
