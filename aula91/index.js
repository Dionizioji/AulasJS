//Aula 91 Getters e Setters 

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', { //Usado para definir propriedades de uma única chave (Property)
        enumerable: true, //Exibe a chave
        //value: estoque, //Valor
        //writable: false, //Habilita ou desabilita alteração na chave escolhida (no caso, 'estoque')
        configurable: false, //Configurável e apagável? (true or false)
        
        //Nesse caso get e set serão usados para substtuir value e writable    
        get: function(){
           return estoque
        },
        set: function(valor){ //Nesse caso, o set permite avaliar o tipo atribuído à chave desejada. 
            if (typeof valor !== "number"){
                console.log('Entrada Inválida') 
            }
        }
    })
}    
    
const p1 = new Produto ("Camiseta", 20, 3)
p1.estoque = "hjhjhj" //Fazendo estoque != do tipo number para o set invalidar! 
console.log(p1)
console.log(Object.keys(p1))

//Usando get e set diretamente dentro de uma função construtura (Construct function)

function criaProduto(){
    return {
        get nome(){//Cria a chave nome em p2
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa',' ')//Veja que a palavra "coisa" será substituida por um espaço vazio " "
            nome = valor
        }
    }
}

const p2 = criaProduto("Camiseta")
p2.nome = "Qualquer coisa"
console.log(p2.nome)
