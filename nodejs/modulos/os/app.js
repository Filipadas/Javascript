// Importa o módulo 'os' do Node.js para acessar informações do sistema operacional
//const os = require('os');

import os from 'os';

// Mostra qual é a arquitetura do processador (ex: x64, arm)
console.log('Arquitetura do sistema:', os.arch());

// Exibe a quantidade total de memória RAM disponível no computador (em bytes)
console.log('Memória total (bytes):', os.totalmem());

// Exibe a quantidade de memória RAM livre no momento (em bytes)
console.log('Memória livre (bytes):', os.freemem());

// Mostra qual é o sistema operacional (ex: Windows, Linux, Darwin)
console.log('Sistema operacional:', os.platform());