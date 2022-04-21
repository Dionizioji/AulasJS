//Aula 95 - Herança
//Suponha um e-commerce que venda camiseta (cor), caneca(material) e desconto e aumento se aplica aos dois 

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
//Incluindo os métodos aumento e desconto no protótipo de produto 
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){ //Camiseta herdará tudo de Produto, mas terá o atributo cor como especificidade
    Produto.call(this, nome, preco)//Dentro de Camiseta podemos usar o call para apontar o nome e preco da... 
    this.cor = cor                 //...da construtora Produto. Ex. se lá for camiseta e 55 reais, aqui também será 
}                                  

//Para que Camiseta tenha o mesmo prototype de Produto temos que fazer:

Camiseta.prototype = Object.create(Produto.prototype) //Aqui Produto.prototype foi atribuído ao prototype de Camiseta
Camiseta.prototype.constructor = Camiseta //E aqui o constructor foi corrigido
Camiseta.prototype.aumento = function(percentual){ //O aumento para Camiseta será especifico (diferente do de Produto)
    this.preco = this.preco + (this.preco * (percentual/100))
}

function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco)//Configurando as heranças de caneca (vindas de Produto)
    this.material = material //Como material é exclusivo, deve ser definifo aqui
    
    
    Object.defineProperty(this, 'estoque' ,{ //Criando getters e setters para manipular o atributo estoque
        enumerable: true,
        configurable: false,
        get: function (){
            return estoque
        },
        set: function(valor){
            if (typeof valor !== 'number')
            return TypeError
            estoque = valor
        }
    }) 
}

Caneca.prototype = Object.create(Produto.prototype)//Linkando o prototype de caneca ao de Produto...
Caneca.prototype.constructor = Caneca              //...mas impedindo que o constructor original seja referenciado como Produto

const generico = new Produto ('generico', 78)
const camiseta = new Camiseta ('Regata', 7 , 'preta')
const caneca = new Caneca('Caneca', 13 , 'Plástico' , 9)

console.log(caneca)
console.log(generico) //Agora observe a diferança entre os construtores de...
console.log(camiseta) //...generico e camiseta!

console.log(generico.aumento(10)) //Verifique os aumentos no console do navegador 
console.log(camiseta.aumento(10))