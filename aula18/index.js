//Aula 32 do curso OBJETOS (Básico)
//Criando um objeto, note que cada atributo tem seu respectivo valor
const pessoa1 = {
    nome: 'Dionizio',
    sobrenome: 'Inácio',
    idade: 25 
}
//acessando os atributos 
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

//Usando uma função para criar um objeto
function criaPessoa (nome1, sobrenome1, idade1) {
    return {
        nome1: nome1,
        sobrenome1: sobrenome1,
        idade1: idade1
    }
}
const pessoa2 = criaPessoa('Dionízio', 'Inácio', 32)
const pessoa3 = criaPessoa('Django','Freeman',43 )
console.log(pessoa2)
console.log(pessoa3)

//Também pode ser feito dessa forma no JS
function criaPessoa2 (nome2, sobrenome2, idade2) {
    return {nome2, sobrenome2, idade2}
}
const pessoa4 = criaPessoa2('Crislaine','Géssica', 32) 
console.log(pessoa4)

//Método é uma função dentro de um objeto 
//O uso do this só serve neste contexto (no caso, ele se refere ao 'objeto')
//Note o uso do método fala e o uso do metodo incrementaIdade
const objeto = {
    nome3: 'José',
    sobrenome3: 'Maria',
    idade3: 45,

    fala() {
        console.log(`${this.nome3} ${this.sobrenome3} está falando: Oi!`)
    },

    incrementaIdade(){
        this.idade3++
    }
}

objeto.fala()
objeto.incrementaIdade()
console.log(objeto.idade3)
