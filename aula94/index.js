//Aula 94 - Manipulando protótipos

const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype  ==> Lembrando que todo objeto criado conta com essa estrutura implicitamente
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA) //Neste caso o objeto B será o prototype do objeto A
//E o objeto A tem como prototype o Object.prototype, o pai de todos os objetos do JS, logo:
//objB ==> objA ==> Object  

//No exemplo vamos criar os métodos dentro do prototype para essa construtora abaixo
function Produto (nome, preco){
    this.nome = nome,
    this.preco = preco
}

//Um protótipo para aplicar um desconto no produto que for criado
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

const p1 = new Produto ('kilodeCarne', 40)

const p2 = {
    nome: 'caneca',
    preco: 20
}
Object.setPrototypeOf(p2, Produto.prototype)//Aplicando um protótipo a um objeto literal


//Aplicando o desconto
p2.desconto(30) //Desconto de 30% no objeto literal
p1.desconto(50)//Desconto de 50%
console.log(p1.preco) //Veja o preço final
console.log(p2.preco) //Preço final

//Também podemos aplicar o prototype desejado de forma direta

const p3 = Object.create(Produto.prototype, { //Dentro de create temos um protótipo de base(pai)
    tamanho: {                                //E podemos adicionar quantas keys forem necessárias e suas configurações     
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    modelo: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 2022
    }
})

p3.preco = 120 //Nesse caso preço já era um atributo vindo do protótipo pai, só o valor foi adicionado
p3.tamanho = 52 

p3.desconto(30)
console.log(p3)