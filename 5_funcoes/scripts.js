function imprimiNoConsole(){
    console.log("Opa mundo");
}

imprimiNoConsole();

function imprimiNumero(num){
    console.log("O numero é:" + num);
}

imprimiNumero(2);
imprimiNumero(10);

const numeroAleatorio = function(){
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();

// Multiplicando três valores com função 

function multiplicarTresNumeros(x,y,z){
    return x*y*z;
}

console.log(multiplicarTresNumeros(2,3,4));
const mult = multiplicarTresNumeros(5,4,8);
console.log("O valor de mult é " + mult);

// Arrow function 
// funções sem nome na suas chamada, apenas parametros e tem que 
// estar atrelada a uma variavel

let consoleTeste = () => {
    console.log("Vagaaaaaabundo! , bota pra descer ladrão");
}

consoleTeste();

let soma = (a,b) => {
    return a+b;
};

console.log(soma(2,3));

// ainda é uma arrow function
const multiplicaPorDois = x => x*2;

console.log(multiplicaPorDois(4));


