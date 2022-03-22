//função de nome meuEscopo para submeter o formulário, evitar atualização da página e mostrar o que foi adicionado no formulário
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    // Abaixo uma forma de não atualizar a página ao enviar o form, note a passagem do preventDefault para evitar a atualização indesejada
    
    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        //Poderia ser direto no array pessoas.push({objeto aqui dentro})...
        
        meuForm = {
            nome1: nome.value, 
            sobrenome1: sobrenome.value,
            peso1: peso.value,
            altura1: altura.value
        }

        pessoas.push(meuForm);
        resultado.innerHTML += `<p>${meuForm.nome1},  ${meuForm.sobrenome1}, ${meuForm.peso1}, ${meuForm.altura1}</p>`;
        console.log(pessoas);
    } 
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
