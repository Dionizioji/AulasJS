//Uso do While no JS

let controle = 0
while (controle <= 10) {
    console.log(controle)
    controle++
}
console.log('Saiu do Looping')

let nome = 'Dionízio'
let tamanhodaString = 0
while (tamanhodaString < nome.length){
    tamanhodaString++
}
console.log(`A String tem ${tamanhodaString} caracteres`)

//Mais um exemplo
function random (min,max){
    const r = Math.random()*(max-min)+min
    return Math.floor(r) 
}

const min = 1
const max = 50
let rand = random(min,max)
console.log(rand)
let contagem = 1

while (rand !== 10){
    rand = random(min,max)
    console.log(rand)
    contagem++
}
console.log(`Foi executado ${contagem}`)

//DO WHILE

do {
    rand = random(min,max)
    console.log(rand)
} while (rand !== 10) 