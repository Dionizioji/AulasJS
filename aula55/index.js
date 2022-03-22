//Aula sobre FOR IN >>>> Lê os indices ou chave do objeto

const frutas = ['Uva', 'Pêra', 'Maça']

for(let indice in frutas){ 
    console.log(indice, frutas[indice])
}

//Utilizando FOR IN com objeto
const pessoa = {
    nome: 'Dionizio',
    sobrenome: 'inácio',
    idade: 32
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave]) //Observe que pessoa[chave] no caso, pega o valor e não o índice
}