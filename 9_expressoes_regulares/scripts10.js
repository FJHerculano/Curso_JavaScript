// Expressões regulares
// CHARS ESPECIAIS 6

// MATCH

const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número não está aqui".match(/\d+/);

console.log(frase);
console.log(frase2);