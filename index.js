const customExpress = require('./config/customExpress.js');

const app = customExpress();

// Gerando o primeiro comando do servidor (listen = ouvindo a porta 3000)
app.listen(3000, () => console.log('Servidor está rodando na porta 3000'));

 