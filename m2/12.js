let idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); // 30
}

console.log("Fora do bloco:", idade); // 25


// Quando a declaração 'let' é trocada por 'var', acaba por encerrar o problema do shadowing, já que começa a ter conflito entre os nomes das variáveis