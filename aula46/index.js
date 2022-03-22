// Date é uma função construtura, começa com a palavra new e Date com letra maiúscula
//new Date() saída 'Sat Apr 20 2019 20:20:45 GMT-0300 (GMT-03:00)'
//nem Date(a ,m ,d, h, M, s, ms)                      
//const tresHoras = 60 * 60 * 3 * 1000 
//const data = new Date() //01/01/1970 Timestamp unix ou época unix
// Como imprimir por partes
/*console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()) //Mês começa do zero 
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) //0 = Domingo e 6 = sábado*/

//Criando uma função que formata a data

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1) 
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const sec = zeroEsquerda(data.getSeconds())
  
    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}` 
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
