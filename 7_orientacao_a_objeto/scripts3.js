// 3º exercicio 
// Cria uma objeto que simula endereço de cliente 
// propriedades: Rua, bairro, cidade, estado
// Podemos atualizar dados da classe endereco

class Endereco{
    constructor(rua, bairro, cidade, estado ){
        this.rua =rua ;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }

}

let endereco = new Endereco("Rua do horto", "Horto", "Juazeiro do norte", "Ce");

console.log(endereco);

endereco.novaRua = "Rua são mamede";

console.log(endereco);
