//Aula 89 Object.defineProperty() e Object.defineProperties()
/*Suponha uma função comstrutora que crie um produto e que...
queiramos o estoque fixo*/
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', { //Usado para definir propriedades de uma única chave (Property)
        enumerable: true, //Exibe a chave
        value: estoque, //Valor
        writable: false, //Habilita ou desabilita alteração na chave escolhida (no caso, 'estoque')
        configurable: false //Configurável e apagável? (true or false)
    })

    Object.defineProperties(this, { //Similar à define property, porém pra várias chaves  
        nome: {
            enumerable: true, //Exibe a chave
            value: estoque, //Valor
            writable: false, //Habilita ou desabilita alteração na chave escolhida (no caso, 'estoque')
            configurable: false //
        },
        preco:{
            enumerable: true, //Exibe a chave
            value: estoque, //Valor
            writable: false, //Habilita ou desabilita alteração na chave escolhida (no caso, 'estoque')
            configurable: false //
        } 
    })
}

const p1 = new Produto("Camiseta" , 20 , 3)
console.log(p1)
console.log(Object.keys(p1))//exibe as chaves de um objeto num array

