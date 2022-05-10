//Utilização do objeto MAP (OBJETO!!!)

//Considere o seguinte array de ojetos:
const pessoas = [
    {id: 3, nome: 'Dionizio'},
    {id: 2, nome: 'Crislaine'},
    {id: 1, nome: 'Fatinha'}
]

//Vamos usar desestructuring no array pessoas:
const novasPessoas = {}
for (const {id, nome} of pessoas){
    novasPessoas[id] = {...pessoas} 
}

console.log(novasPessoas)//Veja que as chaves foram associadas indevidamente (ordem alterada)

//para que isso seja corrigido podemos utilizar o OBJETO map, veja:
//Veja que com a utilização do OBJETO MAP a associação dos indices no novo objeto estará correta
const novasPessoas2 = new Map()
for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas2.set(id, {...pessoa}) 
}

console.log(novasPessoas2) 

//O objeto criado com new Map() também é iterável: 
for (const pessoas of novasPessoas2.keys()){
    console.log(pessoas)
}