// Debugs em javascript
// TRY CATCH

// SIMILIAR AO ELSE IF,  TENTA EXECUTAR UM 
// CODIGO SE DER ERRADO CAI NO CATCH
// RETORNANDO UM ERRO

// Retorna que B não está definido
try{
    let a = 2+b;
}catch(e){
    console.log(e);
}

// ele não trava a execução
// A não ser que asicione um throw dentro do catch
console.log("teste");
