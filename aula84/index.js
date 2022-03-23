//Função ***Filter*** (uma das mais importantes para array)
//Filter -> Sempre retorna um array = ou < que o original (filter >>> filtrar)

//Retornando números maiores que 10:
//                0   1   2   3...
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 , 15, 22 ,27]

const callbackFilter = (valor) => { //Basta passar a função de callBack pra filter com a condição desejada
    console.log(valor)//Só pra checar que a função percorre o array   
    return valor > 10            //A função também poderia ser escrita na forma mais extensa com if´s e tals...
}

const numFiltrados = numeros.filter(callbackFilter)
console.log(numFiltrados)


//Forma ainda mais reduzida: Veja a mesma coisa que está feita acima
const numeros2 = [50, 18, 22, 23, 1, 7, 8, 9, 6]
const numFiltrados2 = numeros2.filter(elemento => elemento > 10)//Nesse caso o 'return' é implícito
console.log(numFiltrados2) 

//Outro exemplo:
const pessoas = [ //Usando um array de objetos
    {nome: 'Dionizio', idade: 32},
    {nome: 'Crislaine', idade: 32},
    {nome: 'Niesztche', idade: 65},
    {nome: 'Newton', idade: 44},
    {nome: 'Neil', idade: 48},
    {nome: 'Ada', idade: 32},
    {nome: 'Sagan', idade: 51} 
]
//Filtrando pessoas que tem o nome com seis letras ou mais
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 6)//Forma mais reduzida possivel
console.log(pessoasNomeGrande)

//Filtrando pessoas que tem mais de 50 anos
const pessoasMaisCinquenta = pessoas.filter(objeto => objeto.idade > 50)//Forma mais reduzida possivel
console.log(pessoasMaisCinquenta)

//Filtrando as pessoas cujo nome termina com letra 'E'
const pessoasLetraE = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('e'))
console.log(pessoasLetraE)

//Testando a lógica com operador ternário
const arrayTeste = (newVet) => {newVet.numeros>10 ?  true : false}
console.log(arrayTeste)