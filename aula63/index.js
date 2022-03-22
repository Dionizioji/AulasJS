//Tratando e lançando erros 
try {                      //O bloco try tenta rodar o que está em seu escopo
    console.log(naoExisto) // Aqui ocorrerá um erro pois a vaiável não foi definida 
}catch (e) {               //Caso ocorra algum erro, será executado o bloco catch
    console.log('Não existo')  //Como o erro ocorreu, o catch foi executado
    //console.log(e)            //O erro pode ser exibido, mas não é comum, o ideal é somente  capturar e tratar 
}                            

/*console.log("*********************************************************************")

function soma(x, y){
    if (typeof x!== 'number' || typeof y!== 'number'){
        throw('x e y precisam ser números')      //O throw lança o erro, conforme o alerta que quiasermos colocar
    }                                            //Nesse caso, se não forem número e sai da função
    return x + y                                 //Caso não tenha erro a soma ocorrerá normalmente 
}

console.log(soma(1,4))
console.log(soma('7', 8))*/


console.log("*********************************************************************")

function somando(x, y){
    if (typeof x!== 'number' || typeof y!== 'number'){
        throw new Error('x e y precisam ser números')      //O throw lança o erro, conforme o alerta que quiasermos colocar, porém com ERROR na frente da mensagem
    }                                                      //New Error é uma função construtora do JS (Mas o JS tem muitas opções de erros)
    return x + y                                           //Pode ser usado ReferenceError também, onde é informado a linha e alguns detalhes sobre o erro
                                                           //Nesse caso, se não forem número e sai da função
}                                                           //Caso não tenha erro a soma ocorrerá normalmente 
try{
console.log(somando(1,4))
console.log(somando('7', 8))
}catch(error){
    console.log(error)
}
