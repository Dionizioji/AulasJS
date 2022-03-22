const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo'); 
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> O Seu número - 2 é: ${numero -2}.</p>`;
texto.innerHTML += `<p> A raiz quadrada do seu número é: ${numero**(1/2)}</p>`;
texto.innerHTML += `<p> Seu número é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> Seu número é tipo NaN: ${isNaN(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando pra baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando pra cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
