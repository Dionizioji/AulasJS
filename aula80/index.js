//Revisão de arrays
/*
push() adiciona elementos no final
pop() remove do final
shift() adiciona no começo e desloca todo o restante para o espaço vago
unshift() remove no começo e desloca todo o restante para o espaço vago
*/
//                  0        1        2
//const nomes = ['Eduardo', 'Maria', 'Joana']
//Arrays podem ser declarados com construtores
const nomes = Array('Eduardo','Maria','Joana','Sebastiao','Ana','Geraldo','Antonio')
console.log(nomes[2])
delete nomes[2]//Deletando um elemento do array sem deletar a alocação
console.log(nomes[2])
//Na passagem por referência o array original sofre qualquer alteração que o novo elemento sofrer
const novo = nomes
novo.pop()
console.log(nomes) //Veja que agora nomes só tem dois elementos também 
//spread operator também são utilizáveis
const novoarray = [...nomes]//Nesse caso o original não é afetado
console.log(novoarray)
nomes.push('Dionizio')
console.log(nomes)
nomes.unshift('Crislaine')
console.log(nomes)
console.log(nomes.shift())//Imprime o elemento que foi removido no começo
console.log(nomes.pop())//Imprime o elemento que foi removido no final
//Separando uma string em array
const myname = 'Dionizio Junio Inacio'
const mynameArray = myname.split(' ')
console.log(mynameArray)
//pegando pedaços do array (Fatiando array)
console.log(nomes.slice(2, -2))// Nesse caso pega um elemento a mais para o limite do lado direito
//Como voltar um array para uma frase string
const arrayTeste = ['Dionizio' , 'Junio' , 'Inacio']
const arrayTestejunto = arrayTeste.join(' ')//O elemento que for colocado entre aspas irá unir a string, espaço nesse caso
console.log(arrayTestejunto)
