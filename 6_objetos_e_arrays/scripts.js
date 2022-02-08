// Testando se eu der um console so no marca2 
// se o typeof vai imprimir como function
// Ou como string 

let marca = 'nike';

console.log(marca.toUpperCase());

let marca2 = marca.toUpperCase();

console.log(marca2.toLowerCase());

console.log(typeof marca2.toLocaleLowerCase);

// Resultado: é uma string 
console.log(typeof marca2);

// [] = array
// {} = Objeto

// Adicionando e deletando propriedades ao objeto

let pessoa = {
    nome:"Herculano",
    idade: 25,
    profissao:"Desenvolvedor",
    cargo: "resolução de cambalacho",
}


console.log(pessoa.idade);

delete pessoa.cargo;

console.log(pessoa.cargo);

pessoa.casado = false;

console.log(pessoa.casado);

// Copiando propriedades de um objeto para outro 

let carro={
    portas:2,
    portamala: '200l',
    motor:'2.0'
}

let adicionais ={
    tetosolar:true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);


// Mutação 
let pessoa1 = {
    nome: "Matheus"
}

let pessoa2 = pessoa1;

console.log(pessoa1 == pessoa2);

// Quando altera um altera todos 
pessoa2.nome = "Pedro";

console.log(pessoa1.nome);

pessoa1.nome = "Luan";

// Push e pop em javascript, adiciona e remove no final do array
let nomes = ["Herculano","Jao", "Matheus"];

let elementoRemovido = nomes.pop();

console.log(elementoRemovido);
console.log(nomes);

nomes.push('Pedo');
console.log(nomes);

// Shift e unshift em javascript, adiciona e remove no final do array
let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiro = carros.shift();
console.log(removerPrimeiro);
console.log(carros);

carros.unshift("cuscuz");
console.log(carros);

// IndexOf e lastIndexOf recebe o indice de uma elemento passado por parametro
let nums = [5,6,2,4,9,6,2];

console.log(nums.indexOf(2));

console.log(nums.lastIndexOf(2));

// Slice
let nums2 = [0,1,2,3,4,5,6,7,8,9];

// Imprime o meu array com -1 no caso até a propriedade 3
console.log(nums.slice(4,5));

// Imprimindo com um indice a mais para a contagem vir normal 
// sem o menos 1 neste caso
console.log(nums.slice(4,6));

// imprime do indice 2 até o final do array 
console.log(nums.slice(2));

// Entendendo o forEach
let names = ["Herculano","Luan","João","Pedro","José"];

names.forEach(name => {
    console.log("O nome é " + name);
});

// Includes verifica a existencia de uma propriedade 

let marcaCarro=["BMW", "Fiat" , "VW", "Renault", "Audi"];

console.log(marcaCarro.includes("Fiat"));
console.log(marcaCarro.includes("Ford"));

// reverse , inverte um array novo invertido 
// utilizando o mesmo array anterior 

console.log(marcaCarro.reverse());

// trim é um metodo para string 
let nomeTrim = "     Herculano";
// Remove espaços não utilizados
let nomecorrigido = nomeTrim.trim();

console.log(nomeTrim);
console.log(nomecorrigido);

// padStart um metodo para string funciona como auto complete de 
// de caracter, 

let sku = "34";
// incrementa no inicio
console.log(sku.padStart(6, "0"));

// Split transforma string em array 
let frase = "Testando o método split";

let palavras = frase.split(" ");
console.log(frase.split(" "));

// O Join junta elementos 
let novaFrase = palavras.join("@");
console.log(novaFrase);

console.log(palavras.join(" "));

// Repeat, repete a string baseado em um parametro 

let palavraLoop = "Repetir ";

console.log(palavraLoop.repeat(10));

// Rest operator é uma forma de uma função receber indefinidos parametros
// O operador rest vai virar um array
// O parametro é definido por: ...nome 


let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);
console.log('Pausa');
imprimirNumeros(num2, num3);
console.log('Pausa');
imprimirNumeros(2,1,2,3,5,4,6);

// Destructuring com objetos
// Atribuir variaveis utilizando do objeto 
let obj = {
    rodas:4,
    portas: 4 ,
    tetosolar: true,
    motor:'2.0'
}

const { rodas: vRodas, portas:vPortas, tetosolar:vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);

console.log("Pulando exemplo");

// Destructuring com array

let numeros = [2,4,5,8];

let [number1, number2, number3, number4] = numeros;

console.log(number1);
console.log(number3);

// transformando JSON em string

console.log("json em string");

let individuo = {
    "nome":"Herculano",
    "idade":28,
    "profissao":"Desenvolvedor",
    "hobbies":["Video game", "Leitura", "Correr"],
}

let individuoTexto = JSON.stringify(individuo);

console.log(individuoTexto);
// undefined pois eu transformei em string, 
//console.log(individuoTexto.nome);

let individuoJSON = JSON.parse(individuoTexto);
console.log(individuoJSON);

console.log(individuoJSON.hobbies[0]);

// Imprimindo tamanho  do array
let exemplo = ["Herculano", "João"];
let Testexopi = [true, false, true, true];

console.log(exemplo.length);
console.log(Testexopi.length);

// Exercicio do objeto Onibus

let onibus = {
    rodas:8,
    limitePassageiro:40,
    portas:2,
};

console.log(onibus.rodas);
console.log(onibus.limitePassageiro);
console.log(onibus.portas);

// No javascript vc pode pesquisar a existencia de um dado no array 
// através do includes
let stringsNomes = ["João", "Maria", "José", "Herculano", "Rodrigo"];

if(stringsNomes.includes("Salete")){
    console.log("O nome foi encontrado");
}else{
    console.log("O nome não foi encontrado");
}