//Aula Closures
//Closure é a habilidade que a função tem de acessar o seu escopo léxico
function retornaFuncao (){
    const nome = 'Dionizio'
    return function (){//Essa funçaõ anônima tem acesso a três escopos, o dela, o da função mais externa e o global
        return nome 
    }
}

const funcao = retornaFuncao()
console.log(funcao)