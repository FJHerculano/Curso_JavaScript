// CALLBACK

// função que retornará uma ação após um tempo pre estabelecido 


console.log("CALLBACK");

setTimeout(function(){
    console.log("callback");
}, 2000);

console.log("2");
console.log("25");
console.log("4");
console.log("6");

console.log("PROMISES");

let p = Promise.resolve(6);

console.log("Outros codigos");

console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)});

p.then((value) => {return value + 5})
 .then((value) => {console.log(value)});

console.log("FALHA NAS PROMISE");

let p2 = Promise.resolve(new Error("Não deu certo"));

console.log("código em execução");

p2.then(value => console.log(value))
    .catch(reason => console.log("Falhou: " + reason));


// rejeitando as promessas

console.log("REJEITANDO PROMISES");

function verificarNumero(num){
    return new Promise((resolve, reject)=>{
        if(num == 2){
            resolve(console.log(`O numero é ${num}`));
        }else{
            reject(new Error("Falhou"));
        }
    });
}

verificarNumero(2);
verificarNumero(3);

