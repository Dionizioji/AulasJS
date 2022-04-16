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
                console.log('Entrada Inválido') 
            }
        }
    })
}    
    
    const p1 = new Produto ("Camiseta", 20, 3)
    p1.estoque = "hjhjhj"
    console.log(p1)
    console.log(Object.keys(p1))
