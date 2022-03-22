//Observe abaixo um exemple de uso do FOR IN (Utilizável em objetos)

const meuNome = 'Dionízio'

for (let i = 0; i < meuNome.length ; i++){
    console.log(meuNome[i])
}
console.log('*************************SÓ PRA SEPARAR**************************')
//Na estrutura abaixo será usado o FOR OF só serve para estruturas iteráveis (STRINGS, ARRAYS)
//Geralmente utilizados quando não queremos o indice, só o valor contido nele (Não utilizável em objetos)
for (let valor of meuNome){
    console.log(valor)
}    
console.log('*************************SÓ PRA SEPARAR**************************')
//Veja como imprimir o valor, o índice eo array comleto com FOR EACH
const nome = ['Dionizio', 'Junio', 'Inacio']
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})