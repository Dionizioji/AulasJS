//Async e Await

function rand(min=0, max=3) {
    min *= 1000
    max*= 1000
    return Math.floor(Math.random() *(max -min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('CAI NO ERRO') 
                return
            }

            resolve(msg.toLocaleUpperCase() + ' - Passei na promise ')
            return
        },tempo)
    })
}

//Poderia ser usada uma cadeia de promessas pra que a resolução das promises chamadas 
//fossem realizadas de forma ordenada, mas para simplificar pode-se usar Async e Await:

 async function executa (){
   try{
        const fase1 = await esperaAi('Fase 1', rand()) //A palavra await só pode ser usada dentro da função async    
        console.log(fase1)

        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)

        //const fase4 = await esperaAi(2222, rand()) //Retire o comentário para ver o uso do catch dentro do async

        console.log("Terminamos na Fase:" , fase3)
        }
    catch(e){  //Caso caia no erro a execução cairá no catch e irá interromper as promisses
        console.log(e)
    }
 }

 executa()
