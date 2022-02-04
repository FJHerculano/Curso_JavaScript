// Estruturas de repetição 
// if e else são o basico e podem ser usado juntamente
// com operadores logicos com o "&&" ou o "||"

// While quando o loop tem uma condição, e o final do laço depende dela ser atingida

// do while pouco usado, fundamentos 
let x = 100;
do {
    console.log(x/2);
    x=x-5;
}while(x >= 0);

// O mais utilizado no dia a dia é for 
for(let i=0 ; i<100 ; i=i+3){
    console.log(`A soma de i com 2 é: ${i + 2}`);
}

// O break é pouco utilizado no dia a dia, mas não tão raro
// usado para parar um laço de repetição

// O continue pula uma execução 
let y=0;
// Essa função sempre imprimi numero impar, pulando a execução dos
// pares
while(y<11){
    y=y+1;
    if(y%2 == 0){
        console.log("Caiu no continue");
        continue;
    }
    console.log(y);
    y=y+1;
}

// Switch , sistema de condicional, estruturado de forma diferente do if
// obrigatorio ter um break; 
// Programadores mais experientes optam por o if 
let nome ="Herculano"
switch(nome){
    case "Herculano":
        console.log("O seu nome é Herculano");
        break;
    case "Marcos":
        console.log("O seu nome é Marcos");
        break;
    default :
        console.log(" não é seu nome amigo ");
        break;
                       
}
