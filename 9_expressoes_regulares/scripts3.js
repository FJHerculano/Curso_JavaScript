// Expressões regulares
// CHARS ESPECIAIS 3

// \d Qualquer dígito de caractere
// \w Um caractere alfanumérico("teste")
// \s Qualquer caractere de espaço em branco
// \D Caracteres que não são dígitos
// \W Caractere não-alfanumerico
// \S Caractere que não seja espaço em branco- 
// Qualquer caractere, menos nova linha
// Letras maiusculas funcionam como negações delas em suas versões minusculas


const pontoRegex = /./;

// O ponto regex aceita quase tudo, retornando o true
console.log("1º exemplo '.'");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

// tem que ter numero
console.log("2º exemplo 'd'");
const dRegex = /\d/; // [0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

// Se não tiver numero é true
console.log("3º exemplo 'D'");
const dRegex2 = /\D/; // [^0-9]

console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

// Não aceitará nada, exceto caracteres com espaço, 
console.log("4º exemplo 's'");
const sRegex = /\s/; 

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

// Aceita todos menos o exemplo com espaço e vazio
console.log("4º exemplo 'w'");
const wRegex = /\w/; 

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));



