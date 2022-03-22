//Try Catch e FINALLY 
// O código aaixo segue uma ordem de execução conforme o que está sendo exibido nos console.log
try{
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
    try { // Try, catch e finally podem ser aninhados 
        console.log(b) //Note o erro proposital 
    } catch(e) {
        console.log('deu erro') //Veja que nesse caso o catch será exibido, pois tem um erro acima (b não está definido)
    } finally {
        console.log('Tambem sou finally')
    }
} catch (e) {
    console.log('tratando e erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado') //Observe que o finally sempre será executado, independente do que aconteca acima 
}

console.log('******************************************************************************')

//Vamos usar um exemplo

function retornaHora (data){
    if(data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date')
    }
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}
try{
const data = new Date ('01-01-1970 12:58:12')//Pode ser passado para a funação uma instância de date desse tipo ou nada 
const hora = retornaHora(12)                   //Se for passado uma string ou número qualquer o erro será exibido 
console.log(hora)                            //Conforme o que tá configurado em throw 
}catch (e){
   //Tratar erro como for necessário 
}finally {
    console.log('Tenha um bom dia!')//Lembrando que o finally será executado havendo erro ou não 
}