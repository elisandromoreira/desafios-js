/**
 * Escreva uma função que recebe uma string e retorna cada palavra da string
 * invertida e em letras minúsculas, porém com as palavras na mesma ordem. 
 * Assuma que a string não possui nenhuma letra com acento nem caracteres,
 * apenas letras e espaços.
 */

function reverseWords(str) {
  // const arr = str.split(' ');
  // const result = arr.map((word) => {
  //   return word.split('').reverse().join('').toLowerCase();
  // });

  // return result.join(' ');

  // ou
  return str.split(' ').map((word) => word.split('').reverse().join('').toLowerCase()).join(' ');

  
}

// testes
console.log(reverseWords('Ari Al'));
console.log(reverseWords('Ranvo'));
console.log(reverseWords('O dedo do pedro ficou preto'));