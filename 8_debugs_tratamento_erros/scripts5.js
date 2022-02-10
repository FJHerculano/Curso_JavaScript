// Debugs em javascript
// EXCEPTIONS
function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O nome precisa ser uma string");
    }else{
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Herculano");
saudacao(5);

console.log("teste");
