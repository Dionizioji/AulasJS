// IIFE -> immediately invoked function expression
//Funções criadas e executadas imediatamente

(function (){ //Veja que essa função não toca o escopo global 
    const nome = 'Dionizio'//É como se essa função estivesse encapsulada
    console.log(nome) 
})()

const nome = 'Qualquer coisa'
console.log(nome) //As variáveis tem mesmo nome mas são executadas normalmente