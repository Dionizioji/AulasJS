//Funções Construtoras
//Também retornam objetos porém sempre iniciamos o seu nome com letras maiúsculas e usamos a palavra (new) para chama-lá
//Exemplo:
//Obs.: Funções construtoras não precisam de vírgula entre os métodos
function Pessoa (nome, sobrenome){//A inicial maiúscula é uma convenção
    //Métodos privados (NÃO podem ser acessados externamente à função)
    const ID = 1234
    const metodoInterno = () => {

    }
    
    //Atributos ou métodos públicos (podem ser acessados ertenamente à função)
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this. nome + ': Sou um método')
    }
} 

const p1 = new Pessoa('Crislaine', 'Géssica')
const p2 = new Pessoa('Dionízio', 'Inácio')
console.log(p1.nome , p2.sobrenome)
p1.metodo()