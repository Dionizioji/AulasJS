//Valores (Primitivos) e Valores por referência 

/*
Primitivos imultáveis - String, number, boolean, undefined
null (bigint, symbol) - Valores copiados
Exemplo : */
//Considere a string abaixo , elas são indexadas  
//       0123        Diferentemente de arrays os elementos guardados nos índices não podem ser alterados 
let nome = 'Dionízio'
// Num array eu poderia alterar a letra 'D' usando A[0] = 'J' por exemplo.

/*Referência (Multáveis) - Array, object, function
 Quando alteramos um valor no array A alteramos em B também, pois a passagem é por referência, veja abaixo
*/
let a = [1,2,3]
let b = a
let c = [...b] //Isso se chama spread, c recebe um cópia independente de b, logo não será mais alterada por referência

a.push(4)
console.log(a)
console.log(b)
console.log(c)
// Veja que b também foi alterado pois passaagem por referência é um apontamento

b.pop()
console.log(b)
console.log(a)

//Objetos funcionam da mesma forma Obs.: Spreads também são válidas para objetos
const e = {
    nome: 'Dionizio',
    sobrenome: 'Inácio'
}
const d = e
const f = {...e}
d.nome = 'Crislaine'
console.log(d.nome)
console.log(f.nome)