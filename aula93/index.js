//Aula 93 - Prototypes
//Este arquivo está linkado a um HTML 
//Abra o HTML, clique em inspecionar e veja as instâncias criadas

function Pessoa (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
   // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}
//Veja que o método nomeCompleto é replicado dentro de cada nova pessoas criada, ocupando recurso desnecessariamente! 
//Suponha que sejam criadas mil pessoas, não haveria necessidade de replicar nomeCompleto tantas vezes
//Para isso podemos usar prototypes

const pessoa1 = new Pessoa ('Dionizio' , 'Inácio')
const pessoa2 = new Pessoa ('Crislaine' , 'Oliveira')

console.log(pessoa1)
console.log(pessoa2)

Pessoa.prototype.estouaqui = "hahahaha"

window.alert(pessoa1.estouaqui) //Hahaha será exibido, pois estou aqui está linkado no prototype de Pessoa
//Agora corrigindo jogaremos nomeCompleto dentro do prototype
//Isso otimiza o código, aliviando o uso da máquina que o rodar

Pessoa.prototype.nomeCompletoCorreto = function (){
    return this.nome + " " + this.sobrenome
}

/*Obs. IMPORTANTE!!!: Caso o mesmo método esteja dentro da função construtora original, o motor do JS vai priorizar 
o método dentro da função construtora (devido ao escopo)
Nesse caso a cadeia de busca será:    pessoa1 -> Pessoa.prototype -> Object.prototype (HERANÇA!!!)
*/

console.log(pessoa1.nomeCompletoCorreto()) 
console.log(pessoa2.nomeCompletoCorreto())

