/**
 * Escreva uma função que recebe um array e retorne um novo array com todas as
 * posições invertidas do original, sem alterá-lo. Não utilize os métodos do
 * objeto global Array do js (reverse, map, forEach, etc). 
 */

function reverse(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

// testes
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([1, 2, 3, 4, 5, 6]));