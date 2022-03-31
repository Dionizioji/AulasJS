//Usando FILTER + MAP + REDUCE
//Filtre os pares 
//Dobre os valores
//Some todos os elementos

//Usando o filter, map e reduce sequencialmente
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const tudodeUmaVez = numeros.filter(function(valor){
    if (valor % 2 === 0){
        return valor
    }
}).map(function(valor){
    return valor*2
}).reduce(function(acumulador, valor){
    return acumulador + valor
},0)
console.log(tudodeUmaVez)