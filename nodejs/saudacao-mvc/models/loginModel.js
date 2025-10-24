

module.exports = {
  gerarMsgPersonalizada: (usuario, senha, acesso) => {
    // use comparação estrita e o operador lógico JavaScript '&&'
    if (usuario === "Filipadass" && senha === "12345") {
      acesso = "liberado";
      
    } 
    else {
      acesso = "negado";
    }
  return `Olá, ${usuario}! Seu acesso foi ${acesso}!`;}
};