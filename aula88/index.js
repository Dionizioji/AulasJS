//Usando forEach Obs.: Somente disponível para ARRAYS
//forEach itera somente sobre Arrays

const a1 = [10,20,30,40,50,60,70,80,90]
a1.forEach(function(valor,indice,array){
    console.log(valor)
})

//Usando arrow
const a2 = [10,20,30,40,50,60,70,80,90]
a2.forEach(valor => console.log(valor + 2))


//Simulando o reduce
const a3 = [10,20,30,40,50,60,70,80,90]
let total = 0
a3.forEach(valor => total += valor)
console.log(total)
