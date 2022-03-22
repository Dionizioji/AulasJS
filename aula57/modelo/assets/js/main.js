const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p') //seleciona todos os 'p' dentro do container 'paragrafos'...
                                           //...fazendo uma Nodelist que se comporta parecida com um array

const estilosBody = getComputedStyle(document.body) //Pegando todos os estilos que foram aplicados no body
const backgroundColorBody = estilosBody.backgroundColor//Selecionamos a configuração que queremos dentro dos estilos disponiveis
 //Aqui a saída no browser será rgb(17, 86, 102), que é a cor do background que tá no HTML

console.log(ps) //Mostra a Nodelist criada lá no browser 

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody //Vai alterar a cor de fundo para a cor guardada na const backgroundColor
    p.style.color = 'white'  //e mudar a cor da fonte de cada paragrafo para branco
}
    
