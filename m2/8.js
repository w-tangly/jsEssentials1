// var -> uso local, mais usada em códigos mais antigos ou legacy
// let -> uso local e global
// const -> constante no qual o valor não pode ser alterada, uso local e global

const constante = 'const'
var variavel = 'var'
{
    let leite = 'let'
    console.log(leite)
}
// console.log(leite)   -> O comando não funciona já que a variável está presa dentro do escopo anterior
// constante = 'novo_nome'    -> O comando não funciona já que o valor de uma constante não pode ser alterado
variavel = 'novaVar'
console.log(variavel)
console.log(constante)  