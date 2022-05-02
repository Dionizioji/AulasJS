//Criando uma função para validar CPF sem interface. 

function ValidaCPF (cpfbruto){
   Object.defineProperty(this , 'cpfLimpo', {
    enumerable: true,   
    get: function (){           
           return cpfbruto.replace(/\D+/g, '')//Essa expressão regular substui tudo que não for número por ''
       }
   })
}

ValidaCPF.prototype.valida = function(){
   if(typeof this.cpfLimpo === 'undefined') return false //Validando se é número
   if(this.cpfLimpo.length !== 11) return true //Validando se tem 11 digitos 
   if(this.isSequencia()) return false

   const cpfParcial = this.cpfLimpo.slice(0,-2) //Mantendo o cpfParcial pra ser usado depois
   const digito1 = this.criaDigito(cpfParcial) //Passando pra outra variável pra ser usado em criaDigito
   const digito2 = this.criaDigito(cpfParcial + digito1)
   
   const novoCpf = cpfParcial + digito1 + digito2
   
   return novoCpf === this.cpfLimpo //A verificação é feita aqui (false or true)
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray  = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((acumulador, val) => {
        acumulador += (regressivo * Number(val)) //Garanta que val seja 'number'
        regressivo--
        return acumulador
    }, 0)
    const digito = 11 - (total % 11) 
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function (){ //Método para eliminar erros com sequências 0000..., 1111..., 2222...
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.lenght)
    return sequencia === this.cpfLimpo 
}

const cpf = new ValidaCPF('07027380692')

if(cpf.valida()){       //Só uma verificação final pra mostrar a utilidade da função
    console.log('CPF Válido!')
}else{
    console.log('CPF Inválido!')
}

