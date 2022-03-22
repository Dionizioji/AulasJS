//aula da arrays básico (Aula 29 no curso)
const teste = ['Luiz' , 'Maria' , 'Jõao' , 1 , true, null]; // podem ter mais de um tipo de dado, mas não é recomendável
const alunos = ['Luiz' , 'Maria' , 'Jõao'];//São indexados, começa em 0, 1, 2...
console.log(`O primeiro elemento do array é ${alunos[0]}`);//Note que Luiz tem índice 0 e assim por diante
alunos[0] = 'Eduardo';//Substitui o componente de índice zero
console.log(`O tamanho do array é ${alunos.length}`);//Mostra o tamanho do array
alunos.push('Luiza');//Adiciona um elemento depois da última posição
console.log(`O novo tamanho do array agora é ${alunos.lenght}`);
console.log(`O array agora é: ${alunos}`);
alunos.unshift('Fábio');//Adiciona elementos no começo do array
console.log(`O novo array é: ${alunos}`); 
const removido = alunos.pop();//Remove um elemento do final do array
console.log(`O elemento removido do final do array foi: ${removido}`);
const removidoComeco = alunos.shift(); //Remove o primeiro elemento do array
console.log(`O elemento removido do começo do array foi: ${removidoComeco}`);
delete alunos[1]; //Remove o índice desejado, MAS DEIXA ESPAÇO VAZIO NO ARRAY
console.log(alunos);
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0,-2));//Pega uma fatia do array, neste caso pega da posição 0 até a antepenúltima (-2)
console.log(alunos);//Mas o array original permanece inalterado
console.log(typeof(alunos)); //Array é do tipo OBJETO em JS
console.log(alunos instanceof Array);//Para verificar se é uma array