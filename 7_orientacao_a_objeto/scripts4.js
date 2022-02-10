// 3º exercicio 
// Cria uma classe carro, propriedades :marca,cor,gasolina-restante
// Criar metodo de dirigir o carro, que vá diminuindo a gasolina
// gradativamente 
// Criar metodo de abastecer caso nescessario 

class Carro{
    constructor(marca, cor, gasolinaRestante, consumo ){
        this.marca =marca ;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros){
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro("VW", "cinza", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);
