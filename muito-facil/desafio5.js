/**
 * Escreva uma função que recebe uma string e retorna a maior letra segundo a 
 * ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra 
 * com acento nem caracteres especiais, apenas letras e espaços.
 */

function biggestLetter(str) {
  // const lowerCase = str.toLowerCase();
  // const arr = lowerCase.split('');
  // const sortedArr = arr.sort();

  // return sortedArr[sortedArr.length -1];

  // ou
  return str.toLowerCase().split('').sort().pop();

}

// testes
console.log(biggestLetter('ari al'));
console.log(biggestLetter('rANvO'));
console.log(biggestLetter('ABAZY'));