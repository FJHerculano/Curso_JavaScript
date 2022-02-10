// Expressões regulares
// CHARS ESPECIAIS 6

// Choice Pattern
// funciona como um "OU" logico 

const reg = /\w+: (Herculano|Matheus|Maria)/;

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Herculano"));
console.log(reg.test("Nome: Chimbinha"));
