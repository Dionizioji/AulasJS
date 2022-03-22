//Função setInterval

function mostraHora(){
    let data = new Date ()
    return data.toLocaleTimeString('pt-Br', {hour12: false})
}


function funcaoDoInterval(){
    console.log(mostraHora())
}

const timer = setInterval(function(){console.log(mostraHora())}, 1000) //SetInterval é uma função que vc executa algo de tempos em tempos (ms)
                                    //Nesse caso, chama a função funcaoDoInterval de 1 em 1 segundo 
//Para encerrar o setInterval pode ser usado o setTimeout

setTimeout(function(){ //Quatro segundos depois timer é imterrompido
    clearInterval(timer)
}, 4000)

setTimeout(function(){ //Oito segundos depois uma mensagem será exibida
    console.log('Olá mundo!')
},8000)