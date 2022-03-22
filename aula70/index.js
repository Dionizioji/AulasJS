//Retorno de funções aula avançada 
function soma (n1,n2){
    return n1+n2 //A função retorna um valor, mas não exibe. Não confunda return com console.log 
}
let sum = soma(4,3) //A variavel sum recebe o retorno da função soma 
console.log(sum)

//Uma função pode retornar um objeto
function criaPessoa (nome, sobrenome){
    return {nome, sobrenome}
}
const p1 = criaPessoa('Dionízio', 'Inácio')
const p2 = { //Veja que p1 e p2 teem o mesmo objeto, mas p1 recebeu o objeto à partir de uma função e p2 foi direto por declaração
    nome: 'Dionízio,',
    sobrenome: 'Inácio'
}

//funções aninhadas, parace uma boneca russa saindo uma dentro da outra 
function falaFrase(comeco){ //Note que a função externa retorna a função falaResto
    function falaResto(resto){ //
        return comeco + ' ' + resto
    }
    return falaResto
}

const olaMundo = falaFrase('Olá') 
console.log(olaMundo('mundo!'))

//Exemplo mais fácil de entender 
function criaMultiplicador (multiplicador){
    function multiplicacao(n){
        return n * multiplicador
    }
    return multiplicacao
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)
console.log(duplica(2))
console.log(triplica(2))
console.log(quadruplica(2))
