let qua = 4, tri = 3, reta=4;
console.log(qua * (tri + reta));

// Variaveis 
let nome = "Herculano";

console.log(nome);
console.log(` O meu nome é ${nome}`);

let laranja = 5;

console.log(laranja * laranja);

nome = "João"
console.log(nome);

laranja = 1000;
console.log(laranja);

laranja = "Laranja";
console.log(laranja);

// Variaveis const vem de constantes onde elas não mudam o seu valor 
// var é um modelo mais antigo, hj em dia é melhor optar por let ou const
// os unicos caracteres especiais que são permitidos na declaração de variaveis são 
// o "$" e o "_" 
// nome de funções nativas do js chamadas de palavras reservadas não poderão ser usadas como variaveis
// exemplo: creak, delete.. porem pode ser usadas com outras palavras , ex: breakHerculano

// FUNÇÕES 

// funções nativas do javascript 

//prompt recebe um parametro do usuario 
let idade = prompt("Qual a sua idade?");
console.log(idade);

// traz uma mensagem na tela
// Pouco utilizado por ser evasivo na tela cliente
alert("cuscuz");

//operadores matematicos que ja estão prontos
let maior = Math.max(1,5,2,3); // min
console.log(maior);

let arredondar = Math.round(5.2486);
console.log(arredondar);

let arredondarPraCima = Math.ceil(5.2486);
console.log(arredondarPraCima);



