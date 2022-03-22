//Funções recursivas, funções que chamam a si mesmas 
function recursiva(max){
    if(max>=10) return
    max++
    console.log(max)
    recursiva(max)
}
recursiva(0)

//Fatorial com recursiva. Ex.:
const fatorial = (fat) => {
    let aux = 1
    while(fat > 1){
        aux *= fat
        fat--
        fatorial(fat)
    }
        return aux
}
let calc = 0
console.log(`O fatorial de ${calc} é ` + fatorial(calc))