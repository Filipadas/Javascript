// Importa o módulo 'fs' (File System) para trabalhar com arquivos no Node.js
//const fs = require('fs');

import fs from 'fs';
// Lê o arquivo 'example.txt' de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Se ocorrer um erro na leitura, exibe a mensagem de erro
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    // Se não houver erro, mostra o conteúdo do arquivo no console
    console.log('Conteúdo do arquivo:', data);
});

// Esta mensagem aparece antes do conteúdo do arquivo, pois a leitura é assíncrona
console.log('Esta mensagem aparece primeiro.');