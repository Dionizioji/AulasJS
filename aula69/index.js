//Parâmetros (avançado)
/*Na forma tradicional o JS armazena os parâmetros nessa estrutura chamado arguments 
e ela pode ser acessada mesmo que a função não tenha parâmetros na sua declaração */ 
function funcao (){ //Mesmo sem passar nenhum parâmetros podemos ter a soma contida arguments 
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
funcao(1 ,2 ,3 ,4) 
//Observe o que ocorre abaixo, lembrando que isso só o corre para funções declaradas dessa forma. Não fuciona para arrows, ocultas...
function funcao2 (a, b, c){ //Mesmo sem passar nenhum parâmetros podemos ter a soma contida arguments 
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total, a, b, c)
}
funcao2(1 ,2 ,3 ,4 ,5 ,6 ,7 ,8) 
//Outro exemplo
function funcao3 (a,b,c,d,e,f){ //O JS auto completa caso o n° de parametros declarados seja menor que o n° de par. passados
    console.log(a,b,c,d,e,f)
}
funcao3(1,2,3)

//Fazendo uma desestruturação (desestructing) para receber os parâmetros
function funcao4({nome, idade, altura}){ //Análogo pra arrays 
    console.log(nome, idade , altura)
}
funcao4({nome: 'Dionizio', idade: '32', altura: 1.93})
//Rest operator (neste caso o rest só pode ser colocado no último parâmetro)
function conta (operador, acumulador, ...numeros){ //numeros vai receber o resto dos parâmetros na forma de array
    for (let numero of numeros){
       if(operador=== '+') acumulador += numero
       if(operador=== '-') acumulador -= numero
       if(operador=== '*') acumulador *= numero
       if(operador=== '/') acumulador /= numero
    }
    console.log(acumulador)
}
conta('*',1,20,30,40,50)