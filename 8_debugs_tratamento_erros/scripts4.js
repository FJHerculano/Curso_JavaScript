// Debugs em javascript
// TRATAMENTO DE INPUT POR FUNÇÃO
// São verificações logicas à respeito do que o usuario 
// está passando na aplicação, evitando erros.
function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log("Por favor apenas numeros");
    }else{
        return number;
    }
}

checarNumero(5);
checarNumero('adhahs');
