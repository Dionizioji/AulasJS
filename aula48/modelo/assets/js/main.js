const date = new Date()
let data = document.querySelector('.container h1') 
let dia = date.getDay()
let mes = date.getMonth()
let ano = date.getFullYear()
let hora = date.getHours()
let minuto = date.getMinutes()

function diaPorExtenso (dia){
    switch (dia){
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira' 
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            return 'Dia estranho!'     
    }
}
function mesPorExtenso(mes){
    switch (mes){
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'     
        case 8:
            return 'Setembro'     
        case 9:
            return 'Outubro'     
        case 10:
            return 'Novembro'     
        case 11:
            return 'Dezembro'     
        default:
            return 'Mês estranho!'     
        }
}

function corrigeHora(hora){
   return (hora < 10) ? `0${hora}` :`${hora}`   
}


function corrigeMinuto(minuto){
    return (minuto < 10) ? `0${minuto}` :`${minuto}`   
 }

data.innerHTML += `${diaPorExtenso(dia)}, ${date.getDate()} de ${mesPorExtenso(mes)} de ${date.getFullYear()} <br> ${corrigeHora(hora)}:${corrigeMinuto(minuto)}`

//Solução utilizando a documentação
/*
const h1 = document.querySelector('.container h1')
const data = new Date()
const op = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleDateString('pt-BR',op)
*/

