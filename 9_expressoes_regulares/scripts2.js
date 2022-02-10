// Expressões regulares
// CONJUNTOS

const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));

// De certa forma um erro por que será impresso como true
// ja que todos os caracteres estão juntos
// Se eu colocar um 56 retorna true pois esta entre o numero
// 1 e 12.345, mas se por 60 não encontra pq nennum dos numeros 
// se inicia com 6 ou mais numeros
console.log(reg1.test("Temos o número 23"));

// Solução é trabahar com intervalos
const reg2 = /[0-9]/;

// Verifica se existe o numero na frase
console.log(reg1.test("Temos o numero 2"));
console.log(reg1.test("Temos o numero"));