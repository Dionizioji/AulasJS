//Métodos de Instância e Estáticos 

//São métodos acessíveis sem necessidade de instâanciar a classe 
class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    aumentarVolume(){  //Método de instância 
        this.volume += 2
    }
    diminuirVolume(){   //Método de instância
        this.volume -=2
    } 
    static trocaPilha(){ //Método estático (SÓ PODEM SER ACESSADOS PELA CLASSE E SÓ PERTENCEM À CLASSE!!!)
        console.log('OK, trocando a pilha!') //É IMPORTANTE PERCEBER QUE trocaPilha não tem nada a ver com um obj criado por ControleRemoto
    }
}

const controle1 = new ControleRemoto("LG")
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1) //Veja que o volume aumentou em 2 a cada chamada

ControleRemoto.trocaPilha() //Acessando o método estático (SÓ PODEM SER ACESSADOS PELA CLASSE!!!) 