//const { somar, subtrair, multiplicar, dividir, idade} = require('./funcoes_matematicas');

import {somar, subtrair, multiplicar, dividir, idade} from './funcoes_matematicas.js';

console.log('Soma: ', somar(10, 5));
console.log('Subtração: ', subtrair(10, 5));
console.log('Multiplicação: ', multiplicar(10, 5));
console.log('Divisão: ', dividir(10, 5));
console.log('Idade para quem nasceu em 2009:',  idade(2009));
