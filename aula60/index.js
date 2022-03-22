//Escreva uma função que receba dois números e rertorne o maior deles 

//Veja q a solução foi otimizada com arrow function e operador ternário e sem o uso da palavra return pq só tinha uma linha 
const max = (min,max) => min > max ? min : max
console.log(max(60,70))