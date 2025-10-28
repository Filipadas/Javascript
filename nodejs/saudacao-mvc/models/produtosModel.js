

module.exports = {
  gerarMsgprodPersonalizada: (id_camiseta, descricao, quantidade, preco) => {
    // Usar quebras HTML (<br>) para quebras visíveis no navegador
    return `Produto cadastrado:<br>ID: ${id_camiseta}<br>Descrição: ${descricao}<br>Quantidade: ${quantidade}<br>Preço: R$${preco}`;
}};