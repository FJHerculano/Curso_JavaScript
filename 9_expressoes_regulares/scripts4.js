// Expressões regulares
// CHARS ESPECIAIS 4

// Podemos utilizar de diversas formas os caracteres especiais 
const dia = /\d\d/;

// o 2019 dar true pois o javascript ler como dois digito o 20 e 0 19
// mas se trouxer comparações logicas como && ... pode se obter melhor controle
console.log(dia.test("2019") &&  "2019".length == 2);
console.log(dia.test("asd"));
//  05 dar true por ter apenas 2 caractere numerico
console.log(dia.test("05") &&  "05".length == 2);
console.log(dia.test("asd12"));

const palavraMinTresLetras = /\w\w\w/;

console.log(palavraMinTresLetras.test("asd"));
console.log(palavraMinTresLetras.test("asdd"));
console.log(palavraMinTresLetras.test("as"));
