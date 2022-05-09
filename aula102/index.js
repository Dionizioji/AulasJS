//Aula 102: Criando classes 
//Assim como a função construtora, classes são moldes
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }                 
    falar (){     //Nas classes os métodos não precisam ser separados por vírgula
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

//Vá até o console do navegador e veja que em classes os métodos não predcisam ser linkados... 
//...igual aos objetos criados à partir de funções construturas, veja que eles já estão nos Prototypes 

//estanciando um objeto a partir de Pessoa
const p1 = new Pessoa ('Dionizio', 'Inacio')
const p2 = new Pessoa ('Crislaine', 'Oliveira')
const p3 = new Pessoa ('Fátima', 'Inacio')
const p4 = new Pessoa ('Diovane', 'Inacio')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)