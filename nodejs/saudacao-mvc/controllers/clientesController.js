const loginModel = require('../models/loginModel');

module.exports = {
  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('login.html', { root: './views' });
  },

  logado: (req, res) => {
      const { usuario, senha } = req.body;
      const mensagem = loginModel.gerarMsgPersonalizada(usuario, senha);
      res.send(`<h1>${mensagem}</h1>`);
    }
};