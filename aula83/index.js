//Aula 83: Concatenando arrays
const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = a1 + a2
console.log(typeof a3)//Veja que neste caso não há concatenação só a criação de uma string

//Para concatenar a1 + a2 e quantas string quiser:
const a4 = a1.concat(a2, [7,8,9], 'Dionízio')
console.log(a4)

//utilizando Spread Operator (...rest -> ...spread )
const a5 = [...a1,...a2, 'Dionízio',...[7,8,9]]
console.log(a5)
