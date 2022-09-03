// Crie uma função que pode receber qualquer numero 
//de argumentos e retorna a média deles.

function media(...args) {
    // let soma = 0;
    // for (let i = 0; i < args.length; i++) {
    //     soma += args[i];
    // }
    // return soma / args.length;

    /* Outra forma de fazer */

    return args.reduce((acc, value) => acc + value, 0) / args.length;
}

console.log(media(10, 9, 6, 8, 9, 1, 5, 7));