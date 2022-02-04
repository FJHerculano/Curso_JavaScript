idade = 15;
//Verifica se tem idade pra balada
if (idade < 18){
    console.log("Você num pode meu rei");
}else{
    console.log("entra e curta a festa");
}
nome = "Herculano";

// Compara string
if (nome == "Herculano"){
    console.log("é tu mesmo oia misera");
}else{
    console.log("Num é tu não visse");
}

// usando bibliotecas nativa do js no caso a Math
const num = 18;

// Base e expoente, ou seja numeros ao quadrado
console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(num, 2));

// Verifica velocidade do carro

velocidade = 50;

if(velocidade <= 70){
    console.log("Dentro dos conforme");
}else if(velocidade >= 70 && velocidade <= 80){
    console.log("Essa é a velocidade permitida, mas está proximo do limite, cuidado para evitar multas ");
}
else{
    console.log("iiiiih rapai, ta ligeirim né? bora ter cuidado na vida ?");
}
y=0;
while(y<11){
    console.log(y);
    y+=1;
}

for(let i=100; i>=50; i--){
    console.log(i);
}

for(let i=0; i<=50; i++){
    if(i%2 == 0){
        console.log(`${i} é par`);
    }else{
        console.log(`${i} é impar`);
    }
}

console.log("Separando os exemplo s2");

let number = 3;
let divisoes = 0;

for(let i=1; i<=number; i++){
    if(number % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`O número ${number} é primo`);
}else{
    console.log(`O número ${number} não é primo`);
}