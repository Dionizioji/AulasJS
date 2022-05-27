//PROMISES: São usadas para aguardar recursos que dependem de um retorno que não sabemos quando irão ocorrer
//Sempre usamos quando vamos trabalhar com algo assíncrono
/*function aleatorio(min,max){ //Função para mandar um tempo aleatório para esperaAi
    min*= 1000
    max*= 1000
    return Math.floor(Math.random() *(max-min) + min)
}

function esperaAi (msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}
 
esperaAi('Frase 1', aleatorio(1,3)) //Veja que com o uso de setTimeout a mesnsagem demora um tempo aleatório 
esperaAi('Frase 2', aleatorio(1,3)) //entre 1 e 3 segundo para ser enviada
esperaAi('Frase 3', aleatorio(1,3))*/

//Suponha que tenhamos a necessidade de executar Frase 1, Frase 2, Frase 3 obrigatoriamente nessa ordem
//Poderíamos usar callbacks, mas podemos evitar isso com o uso de promises: 



function aleat(minimo,maximo){ //Função para mandar um tempo aleatório para esperaAi
    minimo*= 1000
    maximo*= 1000
    return Math.floor(Math.random() *(maximo-minimo) + minimo)
}

function waitAminute (mensagem, time){

    return new Promise((resolve, reject) => {
        if(typeof mensagem !== 'string') reject("BAD VALUE!") // Veja como o reject da promise pode ser usado
                                                              // Quando ocorre o reject caímos no CATCH() 
                                                              // no reject podem ser lançados erros, false e tals...            
        setTimeout(() => {      //Veja q agora o corpo da função waitAminute está dentro da promise     
            resolve(mensagem); //Resolve e Reject só podem receber um parametro
        }, time)
    })
}
 
    console.log("Agora as frases serão exibidas obrigatoriamente na ordem!")
    waitAminute('Frase 1', aleat(1,3))
    .then(resposta => {
        console.log(resposta)
        return waitAminute('frase 2' , aleat(1,3)) //Veja que agora a sequência é obedecida conforme toda a estrutura da Promise
    })
    .then(resposta => {
        console.log(resposta)
        return waitAminute(/*'Frase 3'*/ 2222, aleat(1,3)) //Onde tinha a frase dois foi adicionado um Number
    })                                                     //Pra forçar o erro e cair no reject/catch 
    .then(resposta => {
        console.log(resposta)
    })
    .then(resposta =>{
        console.log("Eu serei o ultimo a ser exibido")
    })
    .catch(e => {
        console.log("ERRO: ", e)
    })

console.log("Isso será exibido antes da promises, pois JS usa programação paralela!!!")
console.log("Isso mostra como o código é assíncrono!")