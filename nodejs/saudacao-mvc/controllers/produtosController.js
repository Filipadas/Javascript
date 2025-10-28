module.exports = {
  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },

  cadastrar: (req, res) => {
    res.sendFile('formcamisetas.html', { root: './views' });
  },

  cadastrado: (req, res) => {
    const { id_camiseta, descricao, quantidade, preco } = req.body;
    // Aqui você pode adicionar a lógica para salvar o produto no banco de dados
    const mensagem = require('../models/produtosModel').gerarMsgprodPersonalizada(id_camiseta, descricao, quantidade, preco);
    res.send(`<h1>${mensagem}</h1>`);
  }};  