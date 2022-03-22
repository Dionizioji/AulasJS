//Faça uma função que retorna se a imagem esta no modo paisagem (True) ou não(False)
//A estrtutura normal seria const ePaisagem = (base,altura) => {return base>altura ? true:false}
const ePaisagem = (base,altura) => base > altura //Nesse caso, podemos eliminar até a parte 'true : false'
console.log(ePaisagem(1920,1080))
