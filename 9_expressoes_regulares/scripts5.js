// Expressões regulares
// CHARS ESPECIAIS 5

// isolando caracteres de forma isolada
const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const notaz = /[^a-z]/;
console.log(notaz.test("asd"));
console.log(notaz.test("123 as"));
// resulta false
console.log(notaz.test("rgvhubcwdnjsxkmvgfhcdjn"));

