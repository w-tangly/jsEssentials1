var nome = "Ana";

function mostrarNome() {
    var nome = "Carlos";
    console.log(nome); // Carlos
}

mostrarNome();
console.log(nome); // Ana

// Esse é mais um exemplo de shadowing, onde a segunda saída puxa o valor global da variável, enquanto a primeira puxa o valor do escopo