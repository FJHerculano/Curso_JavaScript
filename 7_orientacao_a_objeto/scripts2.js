// 2º exercicio 
// carrinho com itens, quantidades total, valor total
// metodo para adicionar e remover itens

class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item){

        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                
                let obj = this.itens[itemCarrinho]
            }
        }
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }
}

let carrinho = new Carrinho ([
    {
        id:01,
        nome:"Camisa",
        qtd: 1 ,
        preco:20
    },
    {
        id:02,
        nome:"Calça",
        qtd: 2,
        preco:50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco:20});

console.log(carrinho);

carrinho.addItem({id:03, nome:"shorte", qtd:1, preco:40});

console.log(carrinho);
