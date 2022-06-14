//AJAX - Assincronous JavaScript XML 
// Vamos fazer uma requisição que permite carregar um arquivo (html, JSON, Texto...) numa página sem aa necessidade de abrir outra janela no nav.
const request = obj => {    //xhr nome padrão ñ obrigatório
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() //Construtor da requisição 
        xhr.open(obj.method, obj.url, true) // parâmetros do open("método" , "url",  "aviso se é uma requisição síncrona ou ñ (true or false)")
        xhr.send() //Só seria necessário enviar algo se fosse um form ou que exija acesso à back-end 

        xhr.addEventListener("load", ()=>{//checando se a requisição ocorrreu
            if (xhr.status >= 200 && xhr.status < 300) { //xhr.status é o código da requisição (verificar no google requisições http)
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }    
        })
    })
}

document.addEventListener('click', e=>{ //Captura o evento click em qualquer componente da pag
    const el = e.target
    const tag = el.tagName.toLowerCase() // Capturando o nome da TAG clicada e convertendo pra lower case

    if(tag === 'a'){
        e.preventDefault()//Evitando que o clique abra o link
        carregaPagina(el)
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href')//Pegando o link que tá sendo clicado
    
    const ojbConfig = {
        method: 'GET',
        url: href
    }
    try {
        const response = await request(ojbConfig)
     carregaResultado(response)
    }catch{
        console.log(e)
    }     
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}