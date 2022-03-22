//Declaração de funções 
//Declaração literal ou clássica
falaOi() //Nesse caso ocorre Hoisting, posso chamar a function antes de declarar

function falaOi (){
 console.log('oie')
}

// TODAS AS FUNÇÕES SÃO TRATADAS COMO First-class objects (Objetos de primeira classe)
//Function expression, permite que funções sejam tratadas como um dado
const souUmDado = function(){
    console.log('sou um dado')
}
souUmDado()
//Nesse caso o parametro vira uma funcao, "uma funçao executando uma função" 
function executaFuncao(funcao){ 
    funcao()
}
executaFuncao(souUmDado)

//Arrow function 
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}
arrowFunction()

//Função dentro de um objeto
const objeto = {
    falar: function(){
        console.log('Tô dentro de um objeto')
    }
}
objeto.falar()//Isso é um método dentro do objeto