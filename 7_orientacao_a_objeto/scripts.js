// Exercicio 
// 1º Criar uma classe que simula um banco, deve conter saldo e depositar saque

class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor; 
    }

    saque(valor){
        this.saldo -= valor; 
    }
}

let conta = new Conta(1000);

conta.deposito(1000);
console.log(conta.saldo);

conta.saque(500);
console.log(conta.saldo);

