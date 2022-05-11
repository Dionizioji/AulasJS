//Herança com Classes: 

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false //Estado do dispositivo, inicia desligado (false)
    }

    ligar (){ //Método verifica se tá ligado e se não tiver liga o disp.
        if (this.ligado){
            console.log(this.nome + ' já está ligado!')
            return
        }
    this.ligado = true
    }   

    desligar(){ //Método verifica se tá desligado e se não tiver desliga o disp.
        if (! this.ligado){
            console.log(this.nome + ' já está desligado!')
            return
        }
    this.ligado = false
    }
}

const d1 = new DispositivoEletronico("smartphone")

console.log(d1.ligado)
d1.ligar() //Antes de exibir o estado do dispositivo vamos ligá-lo!
console.log(d1.ligado) //Veja que agora o dispositivo d1 está ligado (true)
d1.ligar() //Ao tentar ligar novamente, será informado que o disp já tá ligado
d1.desligar()//desligando o disp
console.log(d1.ligado)//Veja que agora o disp está desligado novamente! (false)
d1.desligar()//Ao tentarmos desligar algo que já está desligado seremos notificados

//Agora vamos criar uma classe mais especifica que herdará as características de DispositivoEletronico

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor, modelo){
        super(nome) //Aqui estamos incluindo os parâmetros da classe mãe (DispositivosEletronicos) 
        this.cor = cor //Aqui setamos uma parâmetro que será exclusivo dessa subclasse (Smartphone)
        this.modelo = modelo
    }
}

const s1 = new Smartphone ("Xiaomi" , "Preto", "Redmi Note 9S") //Criando um modelo à partir da classe construtora Smartphone
console.log(s1) //Veja que além dos parâmetros da classe-mãe Smartphone tem cor e modelo à mais
s1.ligar()
console.log(s1.ligado)//Veja que podemos ligar ou desligar s1, pois o método ligar foi herdado de DisposotivosEletronicos


//Ainda podemos criar novas classes à partir de Smartphone com herança de DispositivosEletronicos, mas isso não é recomendável.
//Pois o código terá uma cadeia muito grande, gerando complexidade 

//Os métodos herdados podem ser sobrescritos:
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }
    ligar(){
        console.log("O método ligar para a classe Tablet foi sobrescrito! Mas perceba que desligar permanecerá o mesmo")
    }
}

const t1 = new Tablet("iPad", "Rede tá fraca!")
console.log(t1)
t1.ligar()//Ao chamar ligar só exibirá a mensagem, pois aqui o método foi sobrescrito (somente para a class Tablet)
//O método ligar não alterará mais o estado de ligar, mas se verificarmos o estado ele será buscado na classe "Pai" (DispositivosElet...)
t1.desligar()