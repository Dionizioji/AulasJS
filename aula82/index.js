//Aula 82 - método splice
//Com o método splice é possível simular as  funções que operam arrays (pop, push, shift, unshift)
//                 -5      -4        -3         -2         -1
//                 0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo','Dionízio','Crislaine']

//nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(-2, 1) //o primeiro valor marca o índice inicial da remoção e o segundo o fim
console.log(nomes, removidos)
const adicionado = nomes.splice(3, 0, 'Genoveva') //Irá adicionar quantos eu quiser a partir do índice 3
console.log(nomes, adicionado)
const adicionado2 = nomes.splice(2, 2, 'Zaratrusta', 'Niestzche')//Remove dois a partir do indice 2 e adiciona os dois nomes nesse mesmo indice
console.log(nomes)