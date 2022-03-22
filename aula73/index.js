//Funções de Callback

function rand(min= 1000, max=3000){ //função para gerar um num aleatório entre 1000 e 3000
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
//Veja que o uso da rand abaixo força uma execução aleatória nas três funções 
//Mas para colocar um ordem desejada vamos usar o parâmetro callback
function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    }, rand())
}

function f2(callback){
    setTimeout(function(){
    console.log('f2')
    if(callback) callback()
    }, rand())
}

function f3(callback){
    setTimeout(function(){
    console.log('f3')
    if (callback) callback()
    }, rand())
}

f1(function(){ //Agora a ordem está sendo forçada pois definimos o callback lá em cima 
    f2(function(){
        f3(function(){
            console.log('Olá mundo!')
        })
    })
})


