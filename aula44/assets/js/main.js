//Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (evento){ /*Usando função anônima para capturar o evento submit*/ 
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if(!altura && !peso){
        setResultado('Peso e Altura inválidos', false)
        return
    }
    else if(!peso){
        setResultado('Peso inválido', false)
        return
    }
    else if(!altura){
        setResultado('Altura inválida', false)
        return
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    
    setResultado(msg, true)
})

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if(imc >= 39.9){
        return nivel[5]
    }
    if(imc >= 34.9){
        return nivel[4]
    }
    if (imc >= 29.9){
        return nivel[3]
    }
    if (imc >=24.9){
        return nivel[2]
    }
    if (imc >=18.5){
        return nivel[1]
    }
    if (imc < 18.5){
        return nivel[0]
    }
}

function getImc(peso , altura){
    const imc = peso/(altura**2)
    return imc.toFixed(2)
}

function criaP(){
    const p = document.createElement('p') /*cria um elemento HTML*/ 
    return p
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML =""
    const p = criaP()
    if (isValid){ 
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }   
    p.innerHTML = msg
    resultado.appendChild(p)

}



