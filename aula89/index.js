//Revisão de objetos 

//Declaração literal:

const pessoa = {
    nome: 'Dionízio',
    sobrenome: 'Inácio'
}
//Diferentes formas de acesso às chaves
console.log(pessoa.nome) //Direta
console.log(pessoa['nome']) //Notação de cochetes
const chave = "nome"          //Acesso dinâmico... 
console.log(pessoa[chave])    //...normalmente utilizado quando não sabemos o nome da chave ainda
//*******************************************************************************************/
//Construtor de objetos
//Observe como a estrutura constructor tem a sintaxe diferente da declaração literal
const pessoa1 = new Object()
pessoa1.nome = 'Crislaine'
pessoa1.sobrenome = 'Oliveira'
pessoa1.idade = 33
pessoa1.falarNome = function(){ //Método para compor uma frase com o nome da pessoa
    return (`${this.nome} está falando o seu nome!`)
}
pessoa1.getDataNascimento = function(){ //Método para retornar a idade da pessoa1
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade //retorna o ano de nascimento
}
pessoa1.falarNome()  //Acessando o método dentro do objeto pessoa1
console.log(pessoa1['nome'])
console.log(pessoa1.sobrenome)
console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1){
    console.log(chave)//Acessa as chaves
    console.log(pessoa1[chave])//Acessa os valores contidos nas chaves
}
//********************************************************************************************/

//Factory Functions / Constructor Functions  (Normalmente são padrões de projeto e optamos por uma das duas)

function criaPessoa(nome, sobrenome){ //Usando Factory Functions
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ //Criando um método dentro do objeto criaPessoa 
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa("Dionízio", "Inácio")
console.log(p1.nomeCompleto)

//Usando Constructor Functions
function Pessoa (nome, sobrenome){//Isso não é um objeto, isso é um molde (Um construtor!)
    this.nome = nome
    this.sobrenome = sobrenome
}
// Nesse caso o new cria um objeto vazio atrelado a palavra "this", nós é que atribuímos os valores e suas chaves
const p2 = new Pessoa("Crislaine", "Oliveira") //Nas Constructor Functions o "new" é obrigatório, nesse caso o "this" é o p2
const p3 = new Pessoa("Maria José", "de Fátima Inácio")
console.log(p2.nome, p2.sobrenome)
console.log(p3.nome, p3.sobrenome)
console.log(p2) //Veja que além de p2, será exibido também "Pessoa" que foi o construtor do objeto p2
console.log(p3)

p2.nome = 'Outra coisa'
console.log(p2) // constantes não podem ser alteradas, más neste caso eu não tô alterando o endereço que aponta pro valor...
                     //...mas sim o valor apontado.