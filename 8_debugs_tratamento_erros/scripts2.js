// Debugs em javascript
// CONSOLE.LOG

// permite acompanhar o codigo através da impressão 
// do mesmo, para o programador poder ir se mapeando na sua construção

let a=1;
let b=2;
let c=3;

if(c>a){
    a=b;
    console.log(a);
}

for(let i=5; i>0; i--){
    b++;
    a=a+c+1;
    c+=2;
}
console.log("segunda leva");
    console.log(a);
    console.log(b);
    console.log(c);

if(b == a ){
    a++;
    console.log(a);
}else{
    a=a+b+c;
    console.log(a);
}


a=a*b;
console.log(a);
