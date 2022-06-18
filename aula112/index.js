//Aula 112 - FETCH API 
/*const request = obj => {     //Essa funçao deixará de ser necessária com o uso de FETCH API
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() 
        xhr.open(obj.method, obj.url, true) 
        xhr.send() 

        xhr.addEventListener("load", ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }    
        })
    })
}*/

document.addEventListener('click', e=>{ 
    const el = e.target
    const tag = el.tagName.toLowerCase() // Capturando o nome da TAG clicada e convertendo pra lower case

    if(tag === 'a'){
        e.preventDefault()//Evitando que o clique abra o link
        carregaPagina(el)
    }
})

async function carregaPagina(el){
    try{
    const href = el.getAttribute('href')//Pegando o link que tá sendo clicado 
    const response = await  fetch(href) //Pegando o conteúdo HTML, mas poderia ser JSON, XML, TEXT...

    if(response.status !== 200) throw new Error('ERROR 404')
   
    const html = await response.text()
    carregaResultado(html)
    } catch (e) {
        console.log(e)
    }
    
    //OBS.: Toda a estrutura comentada abaixo pode ser enxugada e substitupida pela combinação de async e fetch usado acima

    /*fetch(href)
        .then(response => {
            if(response.status !== 200) throw new Error("ERROR 404") //Verifica o código, depois segue ou vai pro erro 
               return response.text() //Caso não tenha erro retorna o HTML no local desejado
        })
        .then(html => carregaResultado(html)) //Foi definido HTML pq já sabemos do que se trata
        .catch(e => console.log(e))*/
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}
