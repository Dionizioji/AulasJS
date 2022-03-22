//Lista de tarefas 
const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefa')


function criaLi(){ //Função para criar uma li (para ser adicionada ou removida das tarefas)
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e){//Observa se alguma tecla foi pressionada
    if (e.keyCode === 13){//Verifica se o código da tecla pressionada corresponde à ENTER  
        if(!inputTarefa.value) return 
    criaTarefa(inputTarefa.value)  //Caso sim, trata de adicionar um tarefa   
    }
})

function limpaInput(){// Essa função limpa a lista de tarefas 
    inputTarefa.value = ' '
    inputTarefa. focus() //focus serve para o cursor ficar piscando dentro de algo
}


function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){ //Esse bloco e adiciona a s li's em sequencialmente
    const li = criaLi()
    li.innerHTML = textoInput
    tarefa.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefa()
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return //Verifica se a caixa está preenchida com alguma coisa 
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){//adicionando a funcionalidade de apagar aos botões apagar
    const el = e.target

    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa(){
    const liTarefas = tarefa.querySelectorAll('li') 
    const listaDeTarefas = []
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', " ").trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas) //Cria um JSON do array listaDeTarefas
    localStorage.setItem('tarefas', tarefasJSON)
}


//O bloco abaixo só permite que as tarefas sejam apagadas pelo botão apagar
function adicionaTarefasSalvas (){ //Esse bloco salva as tarefas mesmo se fecharmos o navegador
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()