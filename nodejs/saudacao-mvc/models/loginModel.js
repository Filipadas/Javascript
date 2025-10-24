

module.exports = {
  gerarMsgPersonalizada: (usuario, senha) => {
    // use comparação estrita e o operador lógico JavaScript '&&'
    if (usuario === "Filipadass" && senha === "12345") {
      return `Olá, ${usuario}! Você está logado!`;
    } 
    else {
      return 'Usuário ou senha inválidos.';
    }
  }
};