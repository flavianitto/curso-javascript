//inicializar como 0 pq se passar só um parametro a conta ainda funciona sem retornar NaN
function soma(n1=0, n2=0) {
    return n1+n2;
}
let v1=5;
let v2=10;
console.log(`Soma de ${v1} + ${v2} = ${soma(v1,v2)}`);