// Importa o módulo 'http' do Node.js para criar um servidor web
//const http = require('http');
import http from 'http';   
 
// Cria um servidor HTTP
http.createServer((req, res) => {
    // Define o status da resposta como 200 (OK) e o tipo de conteúdo como texto simples
    res.writeHead (200, {'Content-Type': 'text/plain'});
    // Envia a mensagem 'Hello World!' para o navegador e finaliza a resposta
    res.end('Hello World!');
// O servidor vai escutar na porta 8080
}).listen(8080)