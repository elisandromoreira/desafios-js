/**
 * Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado 
 * cada um dos seus algarismos e concatene os resultados retornando um único
 * número inteiro. 
 */

function square(num) {
  const arr = num.toString().split('');
  const result = arr.map((n) => Number(n) ** 2).join('');

  return Number(result);

  // ou
  // const str = num.toString();
  // let result = '';
  // for (let i = 0; i < str.length; i++) {
  //   result += Math.pow(Number(str[i]), 2).toString();
  // }
  // return Number(result);
}

// testes
console.log(square(123));
console.log(square(234));