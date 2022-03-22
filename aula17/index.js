//Funções aula 29 no curso
function saudacao (nome){
     console.log('Hello World!')
}
saudacao();
//Passando parâmetros 

function teste (nome){
    console.log(`Olá! Meu nome é ${nome}!`)
}
teste("Dionízio")
teste("Maria")//A função é reutilizável por quantas vezes eu quiser

//Função com retorno
function teste2 (nome){
    return `Bom dia, ${nome}!`
}
const testando = teste2("Dionízio") //A variável testando recebe o retorno da função teste2
console.log(testando) 

//somando dois valores, note que foram passados dois parâmetros 
//As variáveis da função ficam inacessíveis externamente, só ficam no escopo da função
function soma (x,y){
    return x+y
}
console.log(`O resultado da soma é: ${soma(2,2)}`)

//Nesse caso, quando não passo parâmetros a função vai somar o que tá pré-definido (no caso 1)
function soma2 (x = 1,y = 1){
    return x+y
}
console.log(`O resultado da soma é: ${soma2()}`)

//Função dentro de uma variável, nesse caso não nomeamos a função (função anônima)
const raiz = function (n){
    return n**0.5
}
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

//arrow function (Será mais aprofundado mais à frente no curso)
const raiz2 = n => n ** 0.5
console.log(raiz2(81))