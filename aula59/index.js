//Break an Continue dentro dos laços
//BREAK E CONTINUE funciona em todos os laços
const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros){
    if (numero === 2 || numero ===5){ //Note que o dois será pulado, pois caso de true nesse if, irá retornar para o iniício do laço
        continue
    }
    console.log(numero) 
}

console.log('******************************************************************************')
//NO caso abaixo só serão mostrados os n° pares
const numeros2 = [1,2,3,4,5,6,7,8,9]

for (let number of numeros2){
    if((number%2)!== 0){
        continue
    }
    console.log(number)
}

//Exemplo de uso do BREAK
console.log('******************************************************************************')
//Repare que o looping será encerrado ao chegar em sete, se o if for colocado depois do console.log o 7 será exibido e será encerrado depois
const numeros3 = [1,2,3,4,5,6,7,8,9]

for (let num of numeros3){
    if (num === 7){ //Note que o dois será pulado, pois caso de true nesse if, irá retornar para o iniício do laço
        break
    }
    console.log(num) 
}
