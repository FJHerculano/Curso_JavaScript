// Expressões regulares
// REJEX TEXT

// a string bola é a string a ser verificada
const reg1 = new RegExp('bola');

//o .test é usado para verificar o regex criado
console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));


const reg2 = /bola/;

let text = 'Tem bola na cesta';

//o .test é usado para verificar o regex criado
console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));
//Atribuindo uma variavel para verificação 
console.log(reg1.test(text));

// tudo diretamente em uma linha 
console.log(/quadrado/.test("kjdbfaihbgoreiquadradoucavrueriv"));

