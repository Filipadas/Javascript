// Importa o módulo HTTP nativo do Node.js
//const http = require('http');

import http from 'http';

// Faz uma requisição HTTP GET para o endereço especificado
http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    // Evento disparado quando um novo pedaço de dados é recebido
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Evento disparado quando toda a resposta foi recebida
    res.on('end', () => {
        console.log(data); // Exibe o conteúdo retornado pela requisição
    });

// Trata erros na requisição
}).on('error', (err) => {
    console.error('Erro: ' + err.message);
});