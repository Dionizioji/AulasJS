//Aula 85 (MAP) ao utilizarmos MAP temos como retorno um novo array diferente do original
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

//Dobre os números
function callBack (number) {
    return number*2
}
const numDobrado = numeros.map(callBack)
console.log(numDobrado)

//Dobre os números (USANDO ARROW)
const numD = numDobrado.map(elemento => elemento*2)
console.log(numD)

//Usando map em objetos
//trocando os sobrenomes por 'FUI TROCADO!'
const pessoas = [{nome: 'Dionizio', sobrenome: 'Inacio'},
{nome: 'Crislaine', sobrenome: 'Oliveira'},
{nome: 'Fatinha', sobrenome: 'Inacio'},
{nome: 'Didi', sobrenome: 'Inacio'},
{nome: 'Gaia', sobrenome: 'Inacio'}]

function callB(chave){
    chave.sobrenome = 'FUI TROCADO!'
    return chave
}
const nomeTrocado = pessoas.map(callB)
console.log(nomeTrocado)


//Adicione uma chave de identificação para cada pessoa no objeto

const comIds = pessoas.map(function(obj, indice){
    obj.id = indice
    return obj
})
console.log(comIds)