// Expressões regulares
// CHARS ESPECIAIS 6

// Ocorrencia preciso 


const cep = /\d{5}-\d{3}/;

console.log(cep.test("63020-104"));
console.log(cep.test("asaas-asd"));
console.log(cep.test("251-20"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(88)9999-9999"));
console.log(tel.test("(88)99999-9999"));
console.log(tel.test("(88)999-999"));

