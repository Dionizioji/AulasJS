//Funções Fábricas (Funções que retornam objetos) Factory Functions

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        //Getter 
        get nomeCompleto(){ 
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(" ")
            this.nome = valor.shift()
            console.log(valor)
        },

        //Método
        fala: function (assunto){
            return `${nome} pesa ${this.peso} kg e ${assunto}` //Note que o this sempre se refere a quem (função, variável...) o chama
        },
        peso: 80
    }
}

const p1 = criaPessoa ('Dionizio', 'Inácio') 
const p2 = criaPessoa ('Crislaine', 'Géssica')
console.log(p2.fala('falando sobre JS')) //Veja que fala é um método de criaPessoa 
console.log(p1.fala('falando sobre JS'))
console.log(p1.nomeCompleto) //Diferente de fala, nomeCompleto é um GETTER de criaPessoa  