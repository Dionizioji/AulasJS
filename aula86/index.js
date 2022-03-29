/*Método Reduce 
(com o reduce é possível simular o map e o filter, mas não é recomendado)

EXEMPLO: Some todos os números (Reduce), retorne um array com os pares (Filer) 
e retorne um array com o dobro dos valores (Map) 
*/
//Solução:
//Some todos os números (Reduce)
const numeros = [5,50,80,1,2,3,5,7,11,15,22,27]
const soma = numeros.reduce(function(acumulador, valor, indice, array){ //A função de callback de reduce pode receber tudo que está ai, 
    acumulador += valor                                                 //E, além disso pode receber um valor inicial '...},0)'
    return acumulador                                                   //Repare que neste exemplo não é necessário "indice e array"
},0) //Valor inicial do acumulador, caso não informado será por padrão o primeiro do array

console.log('Soma de todos os elementos =  '+ soma)

//retorne um array com os pares (Filter é mais adequado para o exercício abaixo) 
const numeros2 = [5,50,80,1,2,3,5,7,11,15,22,27]
const pares = numeros2.reduce(function(acumulador, valor){ //A função de callback de reduce pode receber tudo que está ai, 
    if (valor % 2 === 0 )acumulador.push(valor)                                                 //E, além disso pode receber um valor inicial '...},0)'
    return acumulador                                                   //Repare que neste exemplo não é necessário "indice e array"
},[]) //Valor inicial do acumulador, caso não informado será por padrão o primeiro do array

console.log('separando pares =  '+ pares)

const numeros3 = [5,50,80,1,2,3,5,7,11,15,22,27]
const dobra = numeros3.reduce(function(acumulador, valor, indice, array){ //A função de callback de reduce pode receber tudo que está ai, 
    acumulador.push(valor*2)                                              //E, além disso pode receber um valor inicial '...},0)'
    return acumulador                                                 //Repare que neste exemplo não é necessário "indice e array"
},[]) //Valor inicial do acumulador, caso não informado será por padrão o primeiro do array

console.log('dobrando = '+ dobra)

//Retorne a pessoa mais velha do array da objetos abaixo: 
const pessoas = [{nome: 'Dionizio', idade: 32},
{nome: 'Crislaine', idade: 32},
{nome: 'Fatinha', idade: 59},
{nome: 'Didi', idade: 32},
{nome: 'Gaia', idade: 5}]

const retornaMaisVelha = pessoas.reduce(function(acumulador, valor){
    if (valor.idade < acumulador.idade) return (acumulador)  
    return valor
})

console.log(retornaMaisVelha)