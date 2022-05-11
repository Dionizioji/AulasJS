// Aula 103 - Usando getters e setters em classes
const _velocidade = Symbol('velocidade') //Isso é um atributo que só pode ser alterado dentro da classe, chave privada!
//Cada vez que symbol é chamado, ele é aleatório. 
class Carro{                    
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0 //inicia zerada
    }
    
    set velocidade(valor){ //O set permite limitar a velocidade, simula uma alteração em "Symbol" que é privado...
        console.log('SETTER')
        if (typeof valor !== 'number')return //...limitando alterações para valores absurdos
        if(valor >= 100 || valor <0 )return
        this[_velocidade] = valor
    }

    get velocidade(){   //Tire o comentário de pois de ler a linha 33 e veja que agora sim, por causa do getter o valor real é atribuído à velocidade 
        console.log('GETTER')
        return this[_velocidade]

    }
    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }
    freiar(){
        if(this[_velocidade] <= 0)return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

for(let i = 0; i <= 200; i++){ //Pense nesse for como uma pessoa acelerando o carro
    c1.acelerar()
}

// Suponha que alguém sem querer burlou o sistema e colocou a velocidade em 1500 (sem sentido)
//Pra evitar isso criamos uma chave privada dentro do objeto (Symbol)

c1.velocidade = 2000 //Veja que esta velocidade não é a mesma usada na classe (veja que atibuição acessa o setter (imprime SETTER pra mostrar!))...
                     //Mas não houve mudança no valor pois o range setado no SETTER impediu o valor absurdo para o caso!
console.log(c1) //Veja que a velocidade está máxima, e a exibição da variável que teria o nome 'velocidade' é exibida como [Symbol()]

console.log(c1.velocidade)//Veja que aqui o GETTER é acessado, pois estou tentando acessar o valor da variável...
                        //OBS.: Perceba que estruturalmente c1.velocidade é um método da classe carro e que por sua vez acessa uma...
                        //...variável privada (Symbol) via GETTER, complexo mas entendendo a estrutura da classe construtora é compreensível!!!

