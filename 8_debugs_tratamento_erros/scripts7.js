// Debugs em javascript
// TRY CATCH + FINALLY

// executa independente do resultado do trycatch

try{
    let a = 2+b;
}catch(e){
    console.log(e);
}finally{
    console.log("Executou");
}

// ele não trava a execução
// A não ser que adicione um throw dentro do catch
console.log("teste");
