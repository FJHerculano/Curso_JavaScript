// Expressões regulares
// CHARS ESPECIAIS 6

// OPERADOR PLUS +

const UmOuMaisNumeros = /\d+/;
// aceita a qtd de numero que for passada
console.log(UmOuMaisNumeros.test("1518"));
console.log(UmOuMaisNumeros.test(""));
console.log(UmOuMaisNumeros.test("adsfdgfds"));
