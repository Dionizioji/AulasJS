//como usar SWITCH 
//Ex.: Imprimindo o dia da semana por extenso lembrando que getDay() 0 - 6 , domingo - sábado 
const data = new Date()
const diaSemana = data.getDay()

function getDiaSemanaTexto(diaSemana){
let diaSemanaTexto

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo'
        break
    case 1:
        diaSemanaTexto = 'Segunda'
        break
    case 2:
        diaSemanaTexto = 'Terça'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6:
        diaSemanaTexto = 'Sábado'
        break
    default:
        diaSemanaTexto = 'Error'
        break
}
    return diaSemanaTexto //Pode ser feito colocando o retoro no lugar dos breaks também 
}
console.log(getDiaSemanaTexto(diaSemana))