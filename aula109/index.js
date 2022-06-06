//Métodos úteis para promises: Promise.race, Promise.all, Promise.resolve, Promise.reject

function rand(min, max) {
    min *= 1000
    max*= 1000
    return Math.floor(Math.random() *(max -min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false)

        setTimeout(() => {
            resolve(msg)
        },tempo)
    })
}

/*Proimise.all >>>> Pode receber um array como promises e/ou valores já resolvidos
Veja que o array abaixo contem promises e dois valores já resolvidos*/ 
const promises = ["Primeiro valor", esperaAi('Promise 1', 3000), esperaAi('Promise 2', 500), esperaAi('Promise 3', 1000), "Outro Valor"]
//Veja que ao usarmos o método Promise.all abaixo, todos os valores serão retornados na sequencia
Promise.all(promises).then(function(valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro)
})   

/*Promise.race >>>> Todas as promessas são passadas, mas só a primeira a ser resolvida será retornada, inclusive anteriormente às promises do 
método anterior*/
//Usando a função rand para que os tempos passados sejam aleatórios
const promisesrace = [esperaAi('Promise 1Race', rand(1,5)), esperaAi('Promise 2Race', rand(1,5)), esperaAi('Promise 3Race', rand(1,5))]
//No caso de race, se o array tiver elementos já resolvidos eles sempre serão entregues antes das promises 
//Portanto, usar promises em arrays mistos (promises + elementos resolvidos) não faz muito sentido
Promise.race(promisesrace).then(function(valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro)
})

//Promise.resolve >>>> 

//Exemplo: Suponha que vamos entrar numa página
//Se a página já estiver eme cache, não precisamos esperar, então a página pode ser entregue instantâneamente
function baixaPagina(){
    const emCache = true //Só pra simpboizar que á página já tá em cache

    if(emCache){
        return Promise.resolve("Página em cache") //Entrega instantânea
    }else{
        return esperaAi('Baixei a página', 3000) //Não tava em cache, espere baixar
    }
}

baixaPagina() //Veja que a página já foi predefinida como se estivesse em cache, mude para false pra ver o que acontece!
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e))

//Promise.reject >>> é similar ao resolve, porém os casos true caem no catch() e não no then() 
