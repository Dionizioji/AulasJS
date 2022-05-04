//Factory functions + prototype 
//Vamos cria uma factory function (criaPessoa):

function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome,
        falar(){
            console.log(`${this.nome} está falando.`) //Veja os métodos listados no navegador
        },
        comer(){
            console.log(`${this.nome} está comendo.`) 
        },
        beber(){
            console.log(`${this.nome} está bebendo.`)
        }
    }
}
//Afim de economizar recursos computacionais, seria melhor acrescentar esses métodos no protótipo da função

const p1 = criaPessoa ('Dionizio', 'Inácio')
console.log(p1) //veja no navegador

//Para isso, devemos fazer algo parecido com o que temos em criaPessoa2

function criaPessoa2 (nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`) //Veja os métodos listados no navegador
        },
        comer(){
            console.log(`${this.nome} está comendo.`) 
        },
        beber(){
            console.log(`${this.nome} está bebendo.`)
        }
    }
    return Object.create(pessoaPrototype, { //Property escriptor map: aqui podemos...
        nome: {value: nome},                //...usar getters e setters em cada chave e mais recursos avançados.
        sobrenome: {value: sobrenome}
    })
} 

const p2 = criaPessoa2('Crislaine', 'Oliveira')
console.log(p2) //Veja que os métodos falar, comer e beber agora estão dentro do prototype de p2...
                //...não mais diretamente no objeto como em p1, isso economiza recurso e mais flexibilidade...
                //...no uso de p2 (adição de getters, setters, uso de polimorfismo, herança de forma mais dinâmica, dentre outras coisas)
p2.falar()