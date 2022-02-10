// Expressões regulares
// CHARS ESPECIAIS 6

// Validando dominio 

const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.teste.com.br"));
console.log(validaDominio.test("www.teste.chega"));

// Validando emails 
const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("herculano@gmail.com"));


// Validando Data de Nascimento 
const validaDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
//const validaDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/;

console.log(validaDataNasc.test("29/01/1997"));

