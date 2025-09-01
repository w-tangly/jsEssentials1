var msg = 'Global'
function exibirMensagem(){
    console.log(msg)
    var msg = 'Escopo'
    console.log(msg)
}

exibirMensagem()
console.log(msg)

// Graças a repetição de variáveis com nomes repetidos, o código pode acabar ficando confuso, além da mal interpretação do código sobre a declaração das variáveis