//Funções Geradoras, entregam valores distintos em sucessivas chamadas 

function* geradora1(){
    //Suponha que tenha um trecho de código aqui...    
    yield 'Valor 1' // Retorno da PRIMEIRA CHAMADA!
    //Suponha que tenha um trecho de código aqui...
    yield 'Valor 2' //retorno da SEGUNDA CHAMADA!
    //Suponha que tenha um trecho de código aqui...
    yield 'Valor 3' //retorno da TERCEIRA CHAMADA!
    //Suponha que tenha um trecho de código aqui...    
} 

const g1 = geradora1()
console.log(g1.next().value) //É um método dentro do objeto gerador, nesse caso para ver a saída 
console.log(g1.next().value) //Os 3 'yields' são mostrados sucessivamente até esgotarem as chamadas
