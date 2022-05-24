//Verificação de CPF usando classes

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos) //foi usado o nome da classe no lugar do this
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1) //Assim o método gera digito pode ser estático
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){ //Veja que esse método pode ser estático
        let total = 0                 // Pois não precisamos de nada da instância anterior (escopo logo acima)
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso-- 
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia())return false 
        this.geraNovoCpf()
        console.log(this.novoCPF)

        return this.novoCPF === this.cpfLimpo
    }
}

let validacpf = new ValidaCPF('070.987.720-03')
//console.log(validacpf.valida())

if (validacpf.valida()){
    console.log("CPF válido!")
}else{
    console.log("CPF inválido!")
}