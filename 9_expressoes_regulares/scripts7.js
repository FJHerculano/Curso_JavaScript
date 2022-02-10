// Expressões regulares
// CHARS ESPECIAIS 6

// Question ? torna caracteres opcionais 

const padrao = /abacax?i/;

console.log(padrao.test("Abacaxi"));
// valores true
console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));

const padrao2 = /\d+\w?/;
console.log(padrao2.test("123 "));
console.log(padrao2.test("123cd"));
//valor false 
console.log(padrao2.test(""));
