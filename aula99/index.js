//Aula 99 - Polimorfismo
//Neste exemplo será simulado uma conta com poupança e conta corrente separadas, note que Conta será como uma super classe 
 
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo

}

//As operações bancárias comuns podem ser criadas como métodos (sacar, depositar e verSaldo)
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.verSaldo()}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function (){
    console.log(`Ag./c: ${this.agencia} / ${this.conta}` + `Saldo: R$${this.saldo.toFixed(2)}` )
}

//Com a criação da "superclasse" Conta e seus métodos (sacar, verSaldo e depositar)...
//...agora é possivel criar especializações (conta corrente e conta poupança)

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite //lembrando que limite deve ser definido, pois não foi herdado de Conta (exclusivo de Conta corrente)
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){ //O sacar da conta corrente permite valor negativo (cheque especial ou limite)
    if(this.saldo < this.saldo + this.limite){
        console.log(`Saldo insuficiente: ${this.verSaldo()}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

//Será criada uma conta corrente, perceba como o limite é algo exclusivo da conta corrente
const CC = new ContaCorrente(11, 22, 0, 100)
CC.depositar(10)
CC.sacar(110)
CC.sacar(5)


//Veja a poupanca criada abaixo se comporta diferente de conta corrente, pois...
//...ela não tem o limite que foi exclusivo em Conta Corrente
//Métodos se comportando de formas diferentes em classes filhas à partir de uma ""Classe mãe""...
//...é entendido como POLIMORFISMO EM JAVASCRIPT!!!
function ContaPoupanca(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite 
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const CP = new ContaCorrente(12, 33, 0)
CP.depositar(10)
CP.sacar(10)
CP.sacar(1)