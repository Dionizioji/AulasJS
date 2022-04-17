//Aula 92 - Métodos úteis para objetos
/*Object.values
Object.entries
Object.Assign(des, any)
Object.getOwnPropertyDescriptor(object, 'propertie')
...(spread)

//JÁ FOI VISTO 
Object.keys (retorna as chaves do objeto na forma de array)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty(define uma propriedade)*/

//Como copiar um objeto pra outro (Usando Spread Operator)
const produto = {nome: 'Caneca', preco:'1.8'}
const outraCoisa = produto //outra coisa só aponta para produto
const maisUmaCoisa = {...produto, material: 'Resina'}//Nesse objeto criado os valores serão independentes, pois foi utilizado spread operator

produto.nome = 'Dionízio' //produto e outra coisa serão alterados, pois outraCoisa aponta pra produto
console.log(produto)
console.log(outraCoisa)
console.log(maisUmaCoisa)

//Usando Object.assign
                         //target  ,  Objeto copiado   ,  ...chaves que eu queira add
const caneca = Object.assign({},       produto,        {material: 'Porcelana'})
console.log(caneca)//Veja que caneca replicou produto e adicionou a key material

//Object.getOwnPropertyDescriptor

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    enumerable: true
})
//Exibe o estado das caracteristicas de uma determinada propriedade de um objeto
                                        //Objeto   , propriedade
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//Object.values -> Exibe os valores contidos nas chaves na forma de arrays
console.log(Object.values(outraCoisa))

//Object.entries -> exibe as chaves e seus respectivos valores na forma de arrays
console.log(Object.entries(produto))