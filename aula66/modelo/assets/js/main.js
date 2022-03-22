//Fazendo um Cronômetro
function relogio(){ //É mais prudente colocar tudo dentro de uma única função para nenhuma variável tocar o escopo global 
function criaHoraDosSegundos (segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC' 
    })
}

console.log(criaHoraDosSegundos(10))
const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

function IniciaRelogio (){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    },1000)
}

document.addEventListener('click', function(e){ //Só pro teste abaixo
    const el = e.target
    console.log(el)                       //Mostra onde cliquei lá no console do browser

    if (el.classList.contains('zerar')){  //Verifica o conteudo de el 
        clearInterval(timer)
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
    if (el.classList.contains('iniciar')){
        relogio.classList.remove('pausado') //Adiciona a classe pausado criada lá no CSS ao elemento relogio
        clearInterval(timer)
        IniciaRelogio()
    }
    if (el.classList.contains('pausar')){
        console.log('Você clicou em')
        relogio.classList.add('pausado')   //Remove a classe pausado criada lá no CSS ao elemento relogio
        clearInterval(timer)
    }
})
}
relogio()