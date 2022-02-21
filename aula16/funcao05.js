//fatorial com recursão 
function fatorial(n) {
    if(n==1) {
        return 1;
    }
    else {
        return n*fatorial(n-1);
    }
}
console.log(`Fatorial de 6 = ${fatorial(6)}`);