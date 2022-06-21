//Aula 113 - FETCH API E AXIOS JSON 
fetch('pessoas.json') //Acessando o arquivo JSON com fetch
    .then(resposta => resposta.json())
    .then (json => carregaElementosnaPagina(json))    

//Logando conteúdo do JSON na página
function carregaElementosnaPagina(json){ 
    const table = document.createElement('table')//Criando uma tabela para preencher com dados do JSON 
    let numerodePessoasMostradas = 10 //Número de pessoas do JSON que eu quero exibir
    for(let pessoa = 0;  pessoa < numerodePessoasMostradas ; pessoa++){ 
        //Gerando a tabela dinamicamente com o JS 
        
        const tr = document.createElement('tr')//Criando uma tr (linha) para cada elemento que vamos acessar
        
        let td = document.createElement('td')//Criando uma td (coluna) para cada nome
        td.innerHTML = json[pessoa].nome
        tr.appendChild(td)

        td = document.createElement('td')//Criando uma coluna para cada idade
        td.innerHTML = json[pessoa].idade
        tr.appendChild(td)
        
        td = document.createElement('td')
        td.innerHTML = json[pessoa].salario
        tr.appendChild(td)

        table.appendChild(tr)
    }
    const resultado = document.querySelector(".resultado")
    resultado.appendChild(table)
}

//Acessando as próximas 10 pessoas do JSON com AXIOS
axios('pessoas.json')
    .then(resposta2 => carregandoOutroElemento(resposta2.data))

    function carregandoOutroElemento(json){ 
        const table1 = document.createElement('table')//Criando uma tabela para preencher com dados do JSON 
        let numerodePessoasMostradas = 20 //Agora foi alterado para mostrar as próximas 10 da lista
        for(let pessoa = 10;  pessoa < numerodePessoasMostradas ; pessoa++){ 
            //Gerando a tabela dinamicamente com o JS 
            
            const tr = document.createElement('tr')
            
            let td = document.createElement('td')
            td.innerHTML = json[pessoa].nome
            tr.appendChild(td)
    
            td = document.createElement('td')
            td.innerHTML = json[pessoa].idade
            tr.appendChild(td)
            
            td = document.createElement('td')
            td.innerHTML = json[pessoa].salario
            tr.appendChild(td)
    
            table1.appendChild(tr)
        }
        const resultado = document.querySelector(".resultado2")
        resultado.appendChild(table1)
    }