//Função Fizz, Buzz, FizzBuzz
//Fiz essa diferente do enunciado pois, recebe um vetor 
/*const arranjo = [1, 2, 3, 4, 5, 6, 7, 8, 9, true, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 'teste']

function classifica (arranjo){
    let vetFizzBuzz = [] 
    for(let j in arranjo){
        if(arranjo[j] % 3 === 0 && arranjo[j] % 5 ===0){
            vetFizzBuzz.push('FizzBuzz') 
        }
        else if(typeof(arranjo[j]) !== "number" ){
            vetFizzBuzz.push('NãoéNum')
        }
        else if(arranjo[j] % 3 === 0 && arranjo[j] % 5 !== 0){
            vetFizzBuzz.push('Fizz')
        }
        else if(arranjo[j] % 5 === 0 && arranjo[j] % 3 !== 0){
            vetFizzBuzz.push('Buzz')
        }
        else if(arranjo[j] % 3 !==0 && arranjo[j] % 5 !==0){
            vetFizzBuzz.push(arranjo[j])
        }
    }  
    return console.log(vetFizzBuzz)    
}
classifica(arranjo)
*/ 

//Fazendo da forma como foi pedido na aula 
function testaFizzBuzz (numero){
    if (typeof numero !== 'number') return numero
    if (numero%5 === 0 && numero%3 === 0) return 'FizzBuzz'
    if (numero%5 === 0) return 'Fizz'
    if (numero%3 === 0) return 'Buzz'
    return numero
}

console.log('A', testaFizzBuzz('A')) //Testando a String
for(let j = 0 ; j <= 100 ; j++){
    console.log(j,testaFizzBuzz(j))
} 