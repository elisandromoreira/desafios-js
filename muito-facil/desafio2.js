/**
 * Escreva uma função que recebe um numero e retorna uma quantidade equivalente 
 * da palavra "pink" separadas por um traço "-", sem utilizar nenhuma estrutura 
 * de repetição (while, dowhile, for).
 */

function pink(n) {

  // usando recursão
  if (n === 0) return '';
  if (n === 1) return 'pink';

  return 'pink-' + pink(n-1);
  
  // mais simples
  //return Array(n).fill('pink').join('-');
}

// testes
console.log(pink(0));
console.log(pink(1));
console.log(pink(3));
console.log(pink(4));


