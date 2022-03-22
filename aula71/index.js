//Escopo léxico
const nome = 'Dionízio' 

function falaNome(){
    console.log(nome)//A função reconhece a variável nome mesmo estando fora de seu escopo
}                    // Isso o corre pq a função vai fazer uma varredura pra encontrar a variável 
falaNome()           // E só dara erro quando não for encontrada nem no escopo global

function usaFalaNome(){   //A função vai mostra 'Dionízio' no cosole, se não entendeu veja e...
    const nome = 'Inácio' //...pense sobre escopo novamente
    falaNome()
}
usaFalaNome() //usaFalaNome 