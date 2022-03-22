//atribuição via desestruturação e rest and spread operator 
const a = 'A'
const b = 'B'
const c = 'C'
var arranjo = [1, 2, 3]
arranjo = [a, b, c]
console.log(arranjo)
arranjo = [b, c, a]
console.log(arranjo)  



//rest and spread operator  
const numeros = [100, 200, 300, 400, 500, 600, 700]
const [primeiro, , terceiro,...restodoarray] = numeros//O espaço pula e atribui o próximo item na sequência
console.log(primeiro, terceiro)                       //O rest operantor(...)completa a atribuição com o resto do vetor 
console.log(restodoarray)

//matrizes
const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
//acessando o 5, 2 e 7
console.log(matrix[1][1])
console.log(matrix[0][1])
console.log(matrix[2][0])