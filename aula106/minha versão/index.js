//Verificar CPF's USANDO CLASSES

class Verifica{
    constructor(cpfbruto){
        this.cpfbruto = cpfbruto
    }
    verificandoCPF(){
        if(typeof this.cpfbruto !== 'string'){
            console.log('Valor inválido!' + typeof this.cpfbruto)
        }
    }
    limpandoCPF(){
       if(this.cpfbruto.includes('.')){
            this.cpfbruto = this.cpfbruto.replaceAll('.','')
            this.cpfbruto = this.cpfbruto.replaceAll('-','')
            return this.cpfbruto
        }
    }
    calculaDigitos(){
        let dig1 = 0
        let aux = 10
        for(let i = 0; i < 9; i++){
            parseInt(this.cpfbruto[i])
            dig1 += (aux * parseInt(this.cpfbruto[i]))
            aux -= 1
        }
        console.log(dig1)
        dig1 = 11 - (dig1 % 11)
        console.log('Até aqui' + dig1)
        dig1 > 9 ? dig1 = 9 : dig1 = dig1 
        console.log('digito 1 é ' + dig1)

        let dig2 = 0
        let aux2 = 11
        for(let i = 0; i < 10; i++){
            parseInt(this.cpfbruto[i])
            dig2 += aux2 * parseInt(this.cpfbruto[i])
            console.log(dig2)
            aux2 -= 1
        }
        dig2 = 11 - (dig2 % 11)
        dig2 > 9 ? dig2 = 9 : dig2 = dig2 
        console.log('Digito 2 é ' + dig2)
        const vet = [dig1, dig2]  
        console.log(this.cpfbruto)
        if(parseInt(this.cpfbruto[9]) !== parseInt(vet[0]) || parseInt(this.cpfbruto[10]) !== parseInt(vet[1]) ){
            console.log("CPF inválido!")
        }else{
            console.log("CPF válido!")
        }
    }
}

const cpf = new Verifica('620268796.72')
cpf.verificandoCPF()
cpf.limpandoCPF()
cpf.calculaDigitos()

//FIM


