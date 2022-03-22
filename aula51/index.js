//desestruturação em objetos
const pessoa = {
    nome: 'Dionizio',
    sobrenome: 'Inácio',
    idade: 30,
    endereco:{
        rua: 'Orquideas',
        numero: 5
    }
}

//Teste os blocos abaixo inidividualmente para não dar erro
//const {nome , sobrenome, idade} = pessoa //Attribuição via desestruturação (Foram criadas três váriaveis: nome, sobrenome e idade)
//console.log(nome, sobrenome, idade)

/*//Modificando o nome da chave dentro do objeto //Pra não dar erro apague as duas linhas de cima
const {nome: teste = '', sobrenome} = pessoa
console.log(teste, sobrenome)*/

//rest e spread também se aplicam em objetos, veja: 
//const {nome, ...resto} = pessoa
//console.log(nome, resto)

//Nesse foram criadas três variávies (const) a chave rua foi atribuida a n, a chave numero a variavel numero e endereco a variavel endereco 
const {
    endereco: {rua: n, numero},
    endereco
} = pessoa
console.log(n, numero, endereco) 
  